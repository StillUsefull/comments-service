import {UpdateUserDto} from "@lib/user/application/commands/dtos";

export class UpdateUserCommand {
    constructor(public readonly user: UpdateUserDto) {
    }
}