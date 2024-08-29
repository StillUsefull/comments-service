import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {CreateUserCommand} from "@lib/user/application/commands/create-user/command";
import {UserAggregate} from "@lib/user/domain";
import {UserRepository} from "@lib/user/providers/user.repository";
import {BadRequestException} from "@nestjs/common";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand, UserAggregate> {
    constructor(private readonly repository: UserRepository) {}
    async execute({user}: CreateUserCommand): Promise<UserAggregate>{
        const aggregate = UserAggregate.create(user);
        try {
            return this.repository.create(aggregate);
        } catch (err) {
            throw new BadRequestException(err);
        }
    }
}