import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from '@lib/auth';
import {LoginUserInput, RegisterUserInput} from "../inputs";
import {LoginResponse, RegisterResponse} from "../responses";

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => RegisterResponse)
    async registerUser(@Args('user') user: RegisterUserInput): Promise<RegisterResponse> {
        const registeredUser = await this.authService.register(user);
        return {
            message: 'User successfully registered'
        };
    }

    @Mutation(() => LoginResponse)
    async loginUser(
        @Args('user') user: LoginUserInput,
        @Context() context
    ): Promise<LoginResponse> {
        const userAgent = context.req.headers['user-agent'] || 'unknown';
        const { token, userId } = await this.authService.login(user, userAgent);
        return {
            message: 'Login successful',
            token,
            wsId: userId.toString(),
        };
    }
}