import { InputType, Field } from '@nestjs/graphql';
import {LoginUserDto} from "@lib/auth/dtos";

@InputType()
export class LoginUserInput implements LoginUserDto {
    @Field()
    username: string;

    @Field()
    email: string;

}