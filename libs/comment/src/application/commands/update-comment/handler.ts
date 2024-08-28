import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {UpdateCommentCommand} from "@lib/comment/application/commands/update-comment/command";
import {CommentAggregate} from "@lib/comment/domain";
import {CommentRepository} from "@lib/comment/providers";
import {BadRequestException} from "@nestjs/common";


@CommandHandler(UpdateCommentCommand)
export class UpdateCommentHandler implements ICommandHandler<UpdateCommentCommand, CommentAggregate> {

    constructor(private readonly repository: CommentRepository) {}

    async execute({comment}: UpdateCommentCommand): Promise<CommentAggregate>{
        const aggregate = CommentAggregate.create(comment);
        try {
            return this.repository.save(aggregate)
        } catch (err) {
            throw new BadRequestException(err);
        }
    }
}