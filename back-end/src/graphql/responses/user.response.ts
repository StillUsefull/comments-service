import { ObjectType, Field, ID } from '@nestjs/graphql';
import {IUser} from "@lib/user/domain";

@ObjectType()
export class User implements IUser {
    @Field(() => ID)
    _id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;
}