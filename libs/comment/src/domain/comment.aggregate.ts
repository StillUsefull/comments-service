import {IComment} from "./comment.interface";
import {randomStringGenerator} from "@nestjs/common/utils/random-string-generator.util";
import {IsUUID, IsString, IsNotEmpty, IsEmail, IsUrl, validateSync} from 'class-validator'
import {BadRequestException} from "@nestjs/common";

export class CommentAggregate implements IComment {
    @IsUUID()
    id: string = randomStringGenerator();

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsUrl()
    homepage?: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    photo?: string;

    @IsUUID()
    @IsNotEmpty()
    postId: string;

    @IsUUID()
    @IsNotEmpty()
    parentComment?: string;

    @IsString()
    createdAt = new Date().toISOString();

    @IsString()
    updatedAt = new Date().toISOString();

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
        return _comment;
    }

}