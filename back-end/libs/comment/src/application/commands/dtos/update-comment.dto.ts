import {IsString, IsEmail, IsOptional, IsUUID, IsUrl, IsNotEmpty} from 'class-validator';
import {IComment} from "@lib/comment/domain";

export class UpdateCommentDto implements Partial<IComment>{
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsOptional()
    @IsUrl()
    homepage?: string;

    @IsString()
    @IsOptional()
    text?: string;
}