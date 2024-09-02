import {IsEmail, IsNotEmpty, IsString} from "class-validator";


export class LoginUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}