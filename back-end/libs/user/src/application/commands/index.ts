import {CreateUserHandler} from "@lib/user/application/commands/create-user/handler";
import {UpdateUserHandler} from "./update-user/handler";
import {DeleteUserHandler} from "./delete-user/handler";


export const USER_COMMAND_HANDLERS = [
    CreateUserHandler,
    UpdateUserHandler,
    DeleteUserHandler
]