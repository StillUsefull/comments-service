import {IUser} from "@lib/user/domain/user.interface";
import {IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID, validateSync} from "class-validator";
import {BadRequestException} from "@nestjs/common";
import {ObjectId} from "typeorm";


export class UserAggregate implements IUser{

    @IsOptional()
    _id: ObjectId;

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
    static create(user: Partial<IUser>) {
        const plainUser = (user as any).toObject ? (user as any).toObject() : user;
        const _user = new UserAggregate();
        Object.assign(_user, plainUser);

        _user.updatedAt = _user?._id ? new Date().toISOString() : _user.updatedAt;

        const errors = validateSync(_user);
        if (!!errors.length) {
            throw new BadRequestException('User data not valid');
        }

        return _user;
    }
}