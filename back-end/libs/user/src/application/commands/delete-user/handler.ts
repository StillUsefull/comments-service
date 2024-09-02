import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {DeleteUserCommand} from "./command";
import {UserRepository} from "../../../providers/user.repository";
import {BadRequestException} from "@nestjs/common";

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand, boolean> {
    constructor(private readonly repository: UserRepository) {}
    async execute({id}: DeleteUserCommand): Promise<boolean>{
        try {
            return this.repository.delete(id);
        } catch (err){
            throw new BadRequestException(err);
        }
    }
}