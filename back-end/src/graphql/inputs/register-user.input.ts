import { InputType, Field } from '@nestjs/graphql';
import {RegisterUserDto} from "@lib/auth/dtos";

@InputType()
export class RegisterUserInput implements RegisterUserDto {
    @Field()
    username: string;

    @Field()
    email: string;

}