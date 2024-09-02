import {IsEmail, IsNotEmpty, IsString} from "class-validator";


export class RegisterUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}