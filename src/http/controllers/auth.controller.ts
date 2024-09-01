import {AuthService} from "@lib/auth";
import {Body, Controller, Post, Req} from "@nestjs/common";
import {LoginUserDto, RegisterUserDto} from "@lib/auth/dtos";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('register')
    async registerUser(@Body() user: RegisterUserDto) {
        await this.authService.register(user);
        return {
            message: 'User successfully registered'
        };
    }

    @Post('login')
    async loginUser(@Body() user: LoginUserDto, @Req() request: Request) {
        const userAgent = request.headers['user-agent'] || 'unknown';
        const {token, userId} = await this.authService.login(user, userAgent);
        return {
            message: 'Login successful',
            token,
            wsId: userId
        };
    }
}