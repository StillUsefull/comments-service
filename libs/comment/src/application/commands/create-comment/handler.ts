import {CreateCommentCommand} from "@lib/comment/application/commands/create-comment/command";
import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {CommentAggregate} from "@lib/comment/domain";
import {CommentRepository} from "@lib/comment/providers";
import {BadRequestException} from "@nestjs/common";


@CommandHandler(CreateCommentCommand)
export class CreateCommentHandler implements ICommandHandler<CreateCommentCommand, CommentAggregate> {
    constructor(private readonly repository: CommentRepository) {}
    async execute({comment}: CreateCommentCommand): Promise<CommentAggregate>{
        const aggregate = CommentAggregate.create(comment);
        try {
            return this.repository.create(aggregate);
        } catch (err) {
            throw new BadRequestException(err);
        }

    }
}