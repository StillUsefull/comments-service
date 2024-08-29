import {IsString, IsEmail, IsOptional, IsUUID, IsUrl, IsNotEmpty} from 'class-validator';

export class UpdateCommentDto {

    @IsString()
    @IsOptional()
    @IsUrl()
    homepage?: string;

    @IsString()
    @IsOptional()
    text?: string;
}