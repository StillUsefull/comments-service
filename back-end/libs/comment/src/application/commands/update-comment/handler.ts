import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {UpdateCommentCommand} from "@lib/comment/application/commands/update-comment/command";
import {CommentAggregate} from "@lib/comment/domain";
import {CommentRepository} from "@lib/comment/providers";
import {BadRequestException, NotFoundException} from "@nestjs/common";


@CommandHandler(UpdateCommentCommand)
export class UpdateCommentHandler implements ICommandHandler<UpdateCommentCommand, CommentAggregate> {

    constructor(private readonly repository: CommentRepository) {}

    async execute({comment}: UpdateCommentCommand): Promise<CommentAggregate>{
        const _comment = await this.repository.findOne(comment.id);
        if (!_comment){
            throw new NotFoundException('Can not find this comment')
        }
        try {
            return this.repository.update(comment)
        } catch (err) {
            throw new BadRequestException(err);
        }
    }
}