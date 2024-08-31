import {CommandHandler, EventBus, ICommandHandler} from "@nestjs/cqrs";
import {CommentRepository} from "@lib/comment/providers";
import {DeleteCommentCommand} from "@lib/comment/application/commands/delete-comment/command";
import {CommentDeletedEvent} from "@lib/comment/application/events/comment-delete/event";

@CommandHandler(DeleteCommentCommand)
export class DeleteCommentHandler implements ICommandHandler<DeleteCommentCommand, boolean> {
    constructor(
        private readonly commentRepository: CommentRepository,
        private readonly eventBus: EventBus
    ) {}

    async execute({id}: DeleteCommentCommand): Promise<boolean>{
        const keys = await this.commentRepository.delete(id);
        if (keys){
            await this.eventBus.publish(new CommentDeletedEvent(keys))
        }
        return true;
    }
}