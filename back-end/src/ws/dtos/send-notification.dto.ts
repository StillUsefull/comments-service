import {CommentAggregate} from "@lib/comment/domain";


export class SendNotificationDto {
    wsId: string;
    message: string;
}