import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UserModule} from "@lib/user";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConfig} from "@lib/auth/config";


@Module({
  imports: [
      UserModule,
      PassportModule.register({defaultStrategy: 'jwt'}),
      JwtModule.register(jwtConfig)
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
