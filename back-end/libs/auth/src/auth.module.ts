import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UserModule} from "@lib/user";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConfig} from "@lib/auth/config";
import {JwtGuard} from "@lib/auth/guards/jwt.guard";
import {JwtStrategy} from "@lib/auth/strategies";


@Module({
  imports: [
      UserModule,
      PassportModule.register({defaultStrategy: 'jwt'}),
      JwtModule.register(jwtConfig)
  ],
  providers: [AuthService, JwtStrategy, JwtGuard],
  exports: [AuthService],
})
export class AuthModule {}
