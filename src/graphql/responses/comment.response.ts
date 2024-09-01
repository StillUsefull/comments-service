import { ObjectType, Field, ID } from '@nestjs/graphql';
import {IComment} from "@lib/comment/domain";

@ObjectType()
export class Comment implements IComment {
    @Field(() => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    userId: string;

    @Field({ nullable: true })
    homepage?: string;

    @Field()
    text: string;

    @Field({ nullable: true })
    photo?: string;

    @Field()
    postId: string;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;

    @Field(() => Comment, {defaultValue: null})
    parent?: Comment;

    @Field(() => [Comment], { defaultValue: [] })
    children: Comment[];
}