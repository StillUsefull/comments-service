import {SendNotificationDto} from "@lib/user/application/events/dtos";


export class SendNotificationEvent {
    constructor(public readonly parentComment: SendNotificationDto) {
    }
}