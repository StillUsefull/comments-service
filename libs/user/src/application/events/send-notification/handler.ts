import {EventsHandler, IEventHandler} from "@nestjs/cqrs";
import {SendNotificationEvent} from "@lib/user/application/events/send-notification/event";
import {UserRepository} from "@lib/user/providers/user.repository";
import {WebsocketGateway} from "@lib/providers/ws/websocket.gateway";


@EventsHandler()
export class SendNotificationHandler implements IEventHandler<SendNotificationEvent> {
    constructor(
        private readonly repository: UserRepository,
        private readonly wsGateway: WebsocketGateway
    ) {
    }
    async handle({parentComment}: SendNotificationEvent) {
        this.wsGateway.sendReplyNotification(
            parentComment.userId,
            JSON.stringify({message: `You got a new reply on your comment`, comment: parentComment.comment})
        )
    }
}