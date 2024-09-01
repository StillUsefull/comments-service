
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class LoginResponse {
    @Field()
    message: string;

    @Field()
    token: string;

    @Field()
    wsId: string;
}