import {IsString, IsEmail, IsOptional, IsUUID, IsUrl, IsNotEmpty} from 'class-validator';

export class UpdateCommentDto {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsOptional()
    username?: string;

    @IsString()
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsString()
    @IsOptional()
    @IsUrl()
    homepage?: string;

    @IsString()
    @IsOptional()
    text?: string;
}