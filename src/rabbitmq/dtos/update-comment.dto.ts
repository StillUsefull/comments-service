import {IsString, IsOptional, IsUrl, IsNotEmpty} from 'class-validator';

export class UpdateCommentDto {


    @IsString()
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