import {Controller, NotFoundException} from "@nestjs/common";
import {CommentFacade} from "@lib/comment/application/comment.facade";
import {WebsocketGateway} from "../../ws/websocket.gateway";
import {EventPattern, Payload} from "@nestjs/microservices";
import {CreateCommentDto} from "../dtos/create-comment.dto";
import {SendNotificationDto} from "../../ws/dtos";
import {UpdateCommentDto} from "../dtos/update-comment.dto";


@Controller()
export class CommentsController {
    constructor(
        private readonly commentFacade: CommentFacade,
        private readonly websocketGateway: WebsocketGateway
    ) {
    }

    @EventPattern('create_comment')
    async create(@Payload() comment: CreateCommentDto) {
        const _comment = await this.commentFacade.createComment(comment);
        if (comment.parentComment) {
            const _parentComment = await this.commentFacade.getComment(comment.parentComment);
            const sendNotificationParams: SendNotificationDto = {
                wsId: _parentComment.userId,
                message: _comment.text,
            };
            await this.websocketGateway.sendReplyNotification(sendNotificationParams);
        }
        return _comment;
    }

    @EventPattern('update_comment')
    async update(@Payload() comment: UpdateCommentDto) {
        const _comment = await this.commentFacade.getComment(comment.id);
        if (!_comment) {
            throw new NotFoundException('Cannot find any comment');
        }
        return this.commentFacade.updateComment(comment);
    }

    @EventPattern('delete_comment')
    async delete(@Payload('id') id: string) {
        const comment = await this.commentFacade.getComment(id);
        if (!comment) {
            throw new NotFoundException('Cannot find any comment');
        }
        await this.commentFacade.deleteComment(id);
        return 'Comments were deleted successfully';
    }

    @EventPattern('get_all_comments')
    async getAll(@Payload('postId') postId: string) {
        return this.commentFacade.getComments(postId);
    }

    @EventPattern('get_one_comment')
    async getOne(@Payload('id') id: string) {
        return this.commentFacade.getComment(id);
    }
}