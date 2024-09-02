import {IUser, UserAggregate} from "@lib/user/domain";


export abstract class UserRepository {
    abstract create(user: IUser): Promise<UserAggregate>;
    abstract update(user: Partial<IUser>): Promise<UserAggregate>;
    abstract delete(id: string): Promise<boolean>;
    abstract findOne(user: Partial<IUser>): Promise<UserAggregate>;
}