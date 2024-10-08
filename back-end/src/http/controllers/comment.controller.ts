import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    NotFoundException,
    Param,
    Post,
    Put,
    UnauthorizedException,
    UseGuards,
    Query
} from "@nestjs/common";
import {CommentFacade} from "@lib/comment/application/comment.facade";
import {CreateCommentDto, UpdateCommentDto} from "../dtos";
import {JwtGuard} from "@lib/auth/guards/jwt.guard";
import {HttpCurrentUser, Public} from "@lib/auth/decorators";
import {Cache, CACHE_MANAGER} from "@nestjs/cache-manager";
import {ICachePayload, ICurrentUser} from "@lib/auth/interfaces";
import {UserFacade} from "@lib/user/application/user.facade";
import {SendNotificationDto} from "../../ws/dtos";
import {WebsocketGateway} from "../../ws/websocket.gateway";
import { CommentResponseDto } from "../dtos/comment.response";
import {plainToClass, plainToInstance} from "class-transformer";
import {ConfigService} from "@nestjs/config";
import {PaginationDto} from '@lib/shared/dtos/pagination.dto'

@UseGuards(JwtGuard)
@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentFacade: CommentFacade,
        private readonly userFacade: UserFacade,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly websocketGateway: WebsocketGateway,
        private readonly configService: ConfigService
    ) {}

    @Post('/:postId')
    async create(
        @Body() comment: CreateCommentDto,
        @Param('postId') postId: string,
        @HttpCurrentUser() user: ICurrentUser
    ){

        const {userId, username, email} = await this.cacheManager.get<ICachePayload>(user.sub);
        if (comment?.photo){
            comment.photo = `${this.configService.get<string>('AWS_BASE_URL')}${comment.photo}`;
        }
        const _comment = await this.commentFacade.createComment({...comment, postId, username, email, userId });
        if (comment.parentComment) {
            const _parentComment = await this.commentFacade.getComment(comment.parentComment);
            const sendNotificationParams: SendNotificationDto = {
                    wsId: _parentComment.userId,
                    message: _comment.text,
            };
            await this.websocketGateway.sendReplyNotification(sendNotificationParams);
        }

        return plainToClass(CommentResponseDto, _comment);
    }

    @Put('/:id')
    async update(
        @Body() comment: UpdateCommentDto,
        @Param('id') id: string,
        @HttpCurrentUser() user: ICurrentUser
    ){
        const _comment = await this.commentFacade.getComment(id);
        if (!comment) {
            throw new NotFoundException('Cannot find any comment');
        }
        const {username, email} = await this.cacheManager.get<ICachePayload>(user.sub)
        if (_comment.email !== email || _comment.username !== username){
            throw new UnauthorizedException('You can not update comments of other people')
        }
        return this.commentFacade.updateComment({...comment, id});
    }

    @Delete('/:id')
    async delete(@Param('id') id: string, @HttpCurrentUser() user: ICurrentUser){
        const comment = await this.commentFacade.getComment(id);
        if (!comment) {
            throw new NotFoundException('Cannot find any comment');
        }
        const {username, email} = await this.cacheManager.get<ICachePayload>(user.sub)
        if (comment.email !== email || comment.username !== username){
            throw new UnauthorizedException('You can not delete comments of other people')
        }
        await this.commentFacade.deleteComment(id);
        return 'Comments were deleted successfully'
    }

    @Public()
    @Get('/:postId')
    async getAll(@Param('postId') postId: string,  @Query() query?: PaginationDto){
        const pagination = plainToInstance(PaginationDto, query);
        const {comments, hasMore} = await this.commentFacade.getComments(postId, pagination);
        const _comments = plainToClass(CommentResponseDto, comments, { excludeExtraneousValues: true });
        return {comments: _comments, hasMore}
    }

    @Public()
    @Get('/one/:id')
    getOne(@Param('id') id: string) {
        return this.commentFacade.getComment(id);
    }
}