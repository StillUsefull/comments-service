import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { CommentFacade } from '@lib/comment/application/comment.facade';
import { UserFacade } from '@lib/user/application/user.facade';
import { CreateCommentInput, UpdateCommentInput } from '../inputs';
import { Comment } from '../responses/comment.response';
import {Inject, NotFoundException, UnauthorizedException, UseGuards} from '@nestjs/common';
import { JwtGuard } from '@lib/auth/guards/jwt.guard';
import { GqlCurrentUser, Public } from '@lib/auth/decorators';
import { ICachePayload, ICurrentUser } from '@lib/auth/interfaces';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import {SendNotificationDto} from "../../ws/dtos";
import {WebsocketGateway} from "../../ws/websocket.gateway";

@Resolver(() => Comment)
export class CommentResolver {
    constructor(
        private readonly commentFacade: CommentFacade,
        private readonly userFacade: UserFacade,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly websocketGateway: WebsocketGateway
    ) {}

    @UseGuards(JwtGuard)
    @Mutation(() => Comment)
    async createComment(
        @Args('createCommentInput') createCommentInput: CreateCommentInput,
        @Args('postId') postId: string,
        @Context() context
    ): Promise<Comment> {
        const user: ICurrentUser = context.req.user;
        const { userId, username, email } = await this.cacheManager.get<ICachePayload>(user.sub);

        const newComment = await this.commentFacade.createComment({
            ...createCommentInput,
            postId,
            username,
            email,
            userId,
        });

        if (createCommentInput.parentComment) {
            const parentComment = await this.commentFacade.getComment(createCommentInput.parentComment);
            const sendNotificationParams: SendNotificationDto = {
                wsId: parentComment.userId,
                message: newComment.text,
            };
            await this.websocketGateway.sendReplyNotification(sendNotificationParams);
        }

        return newComment;
    }

    @UseGuards(JwtGuard)
    @Mutation(() => Comment)
    async updateComment(
        @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
        @Args('id') id: string
    ): Promise<Comment> {
        return this.commentFacade.updateComment({ ...updateCommentInput, id });
    }

    @UseGuards(JwtGuard)
    @Mutation(() => String)
    async deleteComment(
        @Args('id') id: string,
        @Context() context
    ): Promise<string> {
        const user: ICurrentUser = context.req.user;
        const comment = await this.commentFacade.getComment(id);

        if (!comment) {
            throw new NotFoundException('Cannot find any comment');
        }

        const { username, email } = await this.cacheManager.get<ICachePayload>(user.sub);
        if (comment.email !== email || comment.username !== username) {
            throw new UnauthorizedException('You cannot delete comments of other people');
        }

        await this.commentFacade.deleteComment(id);
        return 'Comment was deleted successfully';
    }

    @Public()
    @Query(() => [Comment])
    async getComments(
        @Args('postId') postId: string
    ): Promise<Comment[]> {
        return this.commentFacade.getComments(postId);
    }

    @Public()
    @Query(() => Comment)
    async getComment(
        @Args('id') id: string
    ): Promise<Comment> {
        return this.commentFacade.getComment(id);
    }
}
