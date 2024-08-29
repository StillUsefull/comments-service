import {ObjectId} from "typeorm";

export interface IUser {
    _id: ObjectId;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}