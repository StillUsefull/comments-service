import { InputType, Field } from '@nestjs/graphql';
import { CreateCommentDto } from "../../http/dtos";

@InputType()
export class CreateCommentInput implements CreateCommentDto {
    @Field({ nullable: true })
    homepage?: string;

    @Field()
    text: string;

    @Field({ nullable: true })
    photo?: string;

    @Field({ nullable: true })
    parentComment?: string;
}