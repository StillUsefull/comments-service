import {EventsHandler, IEventHandler} from "@nestjs/cqrs";
import {CommentDeletedEvent} from "@lib/comment/application/events/comment-delete/event";
import {FilesService} from "@lib/files";

@EventsHandler(CommentDeletedEvent)
export class CommentDeletedHandler implements IEventHandler<CommentDeletedEvent> {
    constructor(private readonly fileService: FilesService) {}

    async handle({photoKeys}: CommentDeletedEvent){
        if (photoKeys){
            await this.fileService.deletePhoto(photoKeys);
        }
    }
}