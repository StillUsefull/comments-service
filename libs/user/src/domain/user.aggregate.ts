import {IUser} from "@lib/user/domain/user.interface";
import {IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID, validateSync} from "class-validator";
import {BadRequestException} from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

export class UserAggregate implements IUser{

    @IsUUID()
    _id: string = uuidv4();

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    createdAt = new Date().toISOString();

    @IsString()
    updatedAt = new Date().toISOString();

    private constructor() {}
    static create(user: IUser){
        const _user = new UserAggregate()
        Object.assign(_user, user);
        _user.updatedAt = _user?.id ? new Date().toISOString() : _user.updatedAt;
        const errors = validateSync(_user);
        if (!!errors.length){
            throw new BadRequestException('User data not valid');
        }
        return _user;
    }
}