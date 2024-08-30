import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";
import {join} from "path";
import {config} from 'dotenv'

config({ path: join(process.cwd(), '.env') });
const configService = new ConfigService();

export const jwtConfig: JwtModuleOptions = {
    secret: configService.get<string>('JWT_SECRET') || 'default_secret',
    signOptions: {
        expiresIn: configService.get<string>('JWT_TTL') || '1d',
    },
};