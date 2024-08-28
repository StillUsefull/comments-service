
import { IsString, IsEmail, IsOptional, IsUUID, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateCommentDto {
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

    @IsUUID()
    @IsNotEmpty()
    postId: string;

    @IsUUID()
    @IsOptional()
    parentComment?: string;
}