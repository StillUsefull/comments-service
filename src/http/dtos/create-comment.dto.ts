
import { IsString, IsEmail, IsOptional, IsUUID, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateCommentDto {

    @IsString()
    @IsOptional()
    @IsUrl()
    homepage?: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    @IsUUID()
    @IsOptional()
    parentComment?: string;
}