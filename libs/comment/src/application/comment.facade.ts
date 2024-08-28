import {Injectable} from "@nestjs/common";
import {CommandBus, EventBus, QueryBus} from "@nestjs/cqrs";
import {CreateCommentDto, UpdateCommentDto} from "@lib/comment/application/commands/dtos";
import {CreateCommentCommand} from "@lib/comment/application/commands/create-comment/command";
import {CreateCommentHandler} from "@lib/comment/application/commands/create-comment/handler";
import {UpdateCommentCommand} from "@lib/comment/application/commands/update-comment/command";
import {UpdateCommentHandler} from "@lib/comment/application/commands/update-comment/handler";
import {GetCommentsQuery} from "@lib/comment/application/queries/get-comments/query";
import {GetCommentsHandler} from "@lib/comment/application/queries/get-comments/handler";
import {GetCommentQuery} from "@lib/comment/application/queries/get-comment/query";
import {GetCommentHandler} from "@lib/comment/application/queries/get-comment/handler";


@Injectable()
export class CommentFacade {

    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly eventsBus: EventBus
    ){}

    createComment(comment: CreateCommentDto){
        return this.commandBus.execute<CreateCommentCommand, CreateCommentHandler['execute']>(new CreateCommentCommand(comment));
    }

    updateComment(comment: UpdateCommentDto){
        return this.commandBus.execute<UpdateCommentCommand, UpdateCommentHandler['execute']>(new UpdateCommentCommand(comment));
    }

    getComments(postId: string){
        return this.queryBus.execute<GetCommentsQuery, GetCommentsHandler['execute']>(new GetCommentsQuery(postId))
    }

    getComment(id: string){
        return this.queryBus.execute<GetCommentQuery, GetCommentHandler['execute']>(new GetCommentQuery(id))
    }
}