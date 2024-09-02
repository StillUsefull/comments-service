import {Field, ObjectType} from "@nestjs/graphql";
import {User} from "./user.response";


@ObjectType()
export class RegisterResponse {
    @Field()
    message: string;
}
