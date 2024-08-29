import {CommandBus, EventBus, QueryBus} from "@nestjs/cqrs";
import {Injectable} from "@nestjs/common";
import {CreateUserDto, UpdateUserDto} from "./commands/dtos";
import {CreateUserCommand} from "./commands/create-user/command";
import {CreateUserHandler} from "./commands/create-user/handler";
import {UpdateUserHandler} from "./commands/update-user/handler";
import {UpdateUserCommand} from "./commands/update-user/command";
import {DeleteUserCommand} from "./commands/delete-user/command";
import {DeleteUserHandler} from "./commands/delete-user/handler";
import {GetUserQuery} from "./queries/get-user/query";
import {GetUserHandler} from "./queries/get-user/handler";

@Injectable()
export class UserFacade {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly eventsBus: EventBus
    ){}

    createUser(user: CreateUserDto){
        return this.commandBus.execute<CreateUserCommand, CreateUserHandler['execute']>(new CreateUserCommand(user))
    }

    updateUser(user: UpdateUserDto){
        return this.commandBus.execute<UpdateUserCommand, UpdateUserHandler['execute']>(new UpdateUserCommand(user))
    }

    deleteUser(id: string){
        return this.commandBus.execute<DeleteUserCommand, DeleteUserHandler>(new DeleteUserCommand(id))
    }

    getUser(id: string) {
        return this.queryBus.execute<GetUserQuery, GetUserHandler>(new GetUserQuery(id))
    }
}