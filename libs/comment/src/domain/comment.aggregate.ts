import {IComment} from "./comment.interface";
import {IsUUID, IsString, IsNotEmpty, IsEmail, IsUrl, validateSync, IsOptional} from 'class-validator'
import {BadRequestException} from "@nestjs/common";
import {validateTagsAndAttributes} from "@lib/comment/domain/markdown.rules";
import { v4 as uuidv4 } from 'uuid';
export class CommentAggregate implements IComment {
    @IsUUID()
    id: string = uuidv4();

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    @IsUrl()
    homepage?: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    @IsOptional()
    photo?: string;

    @IsUUID()
    @IsNotEmpty()
    postId: string;



    @IsString()
    createdAt = new Date().toISOString();

    @IsString()
    updatedAt = new Date().toISOString();

    parent?: CommentAggregate;

    children: CommentAggregate[] = [];

    private constructor() {

    }

    static create(comment: Partial<IComment>){
        const _comment = new CommentAggregate();
        Object.assign(_comment, comment);
        _comment.updatedAt = _comment?.id ? new Date().toISOString() : _comment.updatedAt;
        const errors = validateSync(_comment);
        if (!!errors.length){
            throw new BadRequestException('Comment not valid');
        }
        validateTagsAndAttributes(_comment.text);
        return _comment;
    }

}