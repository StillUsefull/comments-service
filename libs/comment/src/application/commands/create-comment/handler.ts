import {CreateCommentCommand} from "@lib/comment/application/commands/create-comment/command";
import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {CommentAggregate} from "@lib/comment/domain";
import {CommentRepository} from "@lib/comment/providers";
import {BadRequestException} from "@nestjs/common";
import {WebsocketGateway} from "@lib/providers/ws/websocket.gateway";


@CommandHandler(CreateCommentCommand)
export class CreateCommentHandler implements ICommandHandler<CreateCommentCommand, CommentAggregate> {
    constructor(private readonly repository: CommentRepository, private readonly wsGateway: WebsocketGateway) {}
    async execute({comment}: CreateCommentCommand): Promise<CommentAggregate>{
        const aggregate = CommentAggregate.create(comment);
        try {
            await this.repository.create(aggregate);
        } catch (err) {
            throw new BadRequestException(err);
        }

    }
}