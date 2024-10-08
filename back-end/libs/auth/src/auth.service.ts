import {Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserFacade} from "@lib/user/application/user.facade";
import {JwtService} from "@nestjs/jwt";
import {CACHE_MANAGER, Cache} from "@nestjs/cache-manager";
import {LoginUserDto, RegisterUserDto} from "@lib/auth/dtos";
import { v4 as uuidv4 } from 'uuid';
import {ICachePayload, ICurrentUser} from "@lib/auth/interfaces";
import {ConfigService} from "@nestjs/config";
import {convertTimeToMilliseconds} from "@lib/shared/utils";
@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly userFacade: UserFacade,
        private readonly jwtService: JwtService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}

    async register(user: RegisterUserDto){
        return this.userFacade.createUser(user);
    }

    async login(user: LoginUserDto, userAgent: string) {
        const _user = await this.userFacade.getUser(user);
        if (!_user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const sessionId = uuidv4();
        const ttl = this.configService.get<string>('JWT_TTL');

        const payload = { sub: sessionId, userAgent };
        const token = this.jwtService.sign(payload);

        await this.cacheManager.set(sessionId, {
            username: _user.username,
            email: _user.email,
            userId: _user._id,
            userAgent,
        }, convertTimeToMilliseconds(ttl));

        return { token, userId: _user._id };
    }

    async validateUser({ sub, userAgent }: ICurrentUser) {
        const cachePayload = await this.cacheManager.get<ICachePayload>(sub);
        if (!cachePayload) {
            throw new UnauthorizedException('Session not found or expired');
        }
        if (userAgent !== cachePayload.userAgent) {
            await this.cacheManager.del(sub)
            throw new UnauthorizedException('Invalid user agent');
        }
        return true;
    }
}
