import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {UpdateUserCommand} from "@lib/user/application/commands/update-user/command";
import {UserAggregate} from "@lib/user/domain";
import {UserRepository} from "@lib/user/providers/user.repository";
import {BadRequestException} from "@nestjs/common";

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand, UserAggregate> {
    constructor(private readonly repository: UserRepository) {}
    async execute({user}: UpdateUserCommand): Promise<UserAggregate>{
        const aggregate = UserAggregate.create(user);
        try {
            return this.repository.update(aggregate);
        } catch (err){
            throw new BadRequestException(err);
        }
    }
}