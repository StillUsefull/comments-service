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
import {DeleteCommentCommand} from "@lib/comment/application/commands/delete-comment/command";
import {DeleteCommentHandler} from "@lib/comment/application/commands/delete-comment/handler";
import {PaginationDto} from "@lib/shared/dtos/pagination.dto";


@Injectable()
export class CommentFacade {

    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly eventsBus: EventBus
    ){}

    createComment(comment: CreateCommentDto){
        return this.commandBus.execute<CreateCommentCommand, Awaited<ReturnType<CreateCommentHandler['execute']>>>(new CreateCommentCommand(comment));
    }

    updateComment(comment: UpdateCommentDto){
        return this.commandBus.execute<UpdateCommentCommand, Awaited<ReturnType<UpdateCommentHandler['execute']>>>(new UpdateCommentCommand(comment));
    }

    deleteComment(id: string){
        return this.commandBus.execute<DeleteCommentCommand, Awaited<ReturnType<DeleteCommentHandler['execute']>>>(new DeleteCommentCommand(id))
    }

    getComments(postId: string, pagination: PaginationDto){
        return this.queryBus.execute<GetCommentsQuery, Awaited<ReturnType<GetCommentsHandler['execute']>>>(new GetCommentsQuery(postId, pagination))
    }

    getComment(id: string){
        return this.queryBus.execute<
            GetCommentQuery,
            Awaited<ReturnType<GetCommentHandler['execute']>>>(new GetCommentQuery(id))
    }
}