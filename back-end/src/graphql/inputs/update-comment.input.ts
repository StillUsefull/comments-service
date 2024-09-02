import { InputType, Field } from '@nestjs/graphql';
import {UpdateCommentDto} from "../../http/dtos";

@InputType()
export class UpdateCommentInput implements UpdateCommentDto {
    @Field({ nullable: true })
    homepage?: string;

    @Field({ nullable: true })
    text?: string;
}