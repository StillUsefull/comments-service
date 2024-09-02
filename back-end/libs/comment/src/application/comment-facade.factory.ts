import {CommandBus, EventBus, QueryBus} from "@nestjs/cqrs";
import {CommentFacade} from "@lib/comment/application/comment.facade";


export const commentFacadeFactory = (commandBus: CommandBus, queryBus: QueryBus, eventBus: EventBus) => new CommentFacade(commandBus, queryBus, eventBus)