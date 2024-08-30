import {IUser} from "@lib/user/domain";


export class GetUserQuery {
    constructor(public readonly user: Partial<IUser>) {
    }
}