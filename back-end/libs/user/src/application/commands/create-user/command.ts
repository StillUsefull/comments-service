import {CreateUserDto} from "@lib/user/application/commands/dtos/create-user.dto";


export class CreateUserCommand {
    constructor(public readonly user: CreateUserDto) {}
}