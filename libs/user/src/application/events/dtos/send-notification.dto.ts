import {CommentAggregate} from "@lib/comment/domain";


export class SendNotificationDto {
    userId: string;
    comment: string;
}