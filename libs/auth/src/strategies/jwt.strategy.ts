
import { PassportStrategy } from '@nestjs/passport'
import {Strategy, ExtractJwt} from 'passport-jwt'
import {AuthService} from "../auth.service";
import {ConfigService} from "@nestjs/config";
import {ICurrentUser} from "@lib/auth/interfaces/current-user.interface";
import {Injectable} from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly authService: AuthService
    ) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: false,
                secretOrKey: configService.get('JWT_ACCESS_TOKEN_SECRET')
            }
        );
    }

    async validate(payload: ICurrentUser){
        await this.authService.validateUser(payload);
        return payload;
    }
}