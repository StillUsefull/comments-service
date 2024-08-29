import {IsEmail, IsNotEmpty, IsOptional, IsString} from "class-validator";


export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    username?: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @IsOptional()
    email?: string;
}