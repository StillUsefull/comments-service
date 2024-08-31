import {
    Body,
    Controller, Delete,
    Get,
    Inject, NotFoundException,
    Param,
    Post,
    Put, UnauthorizedException,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {CommentFacade} from "@lib/comment/application/comment.facade";
import {CreateCommentDto, UpdateCommentDto} from "../dtos";
import {JwtGuard} from "@lib/auth/guards/jwt.guard";
import {CurrentUser, Public} from "@lib/auth/decorators";
import {FileInterceptor} from "@nestjs/platform-express";
import {FilesService} from "@lib/files";
import {multerOptions} from "@lib/files/files.options";
import {Cache, CACHE_MANAGER} from "@nestjs/cache-manager";
import {ICachePayload, ICurrentUser} from "@lib/auth/interfaces";

@UseGuards(JwtGuard)
@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentFacade: CommentFacade,
        private readonly filesService: FilesService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}

    @Post('/:postId')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async create(
        @Body() comment: CreateCommentDto,
        @Param('postId') postId: string,
        @CurrentUser() user: ICurrentUser
    ){


        const {username, email} = await this.cacheManager.get<ICachePayload>(user.sub)
        return this.commentFacade.createComment({...comment, postId, username, email })
    }

    @Put('/:id')
    update(@Body() comment: UpdateCommentDto, @Param('id') id: string){
        return this.commentFacade.updateComment({...comment, id});
    }

    @Delete('/:id')
    async delete(@Param('id') id: string, @CurrentUser() user: ICurrentUser){
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
    getAll(@Param('postId') postId: string){
        return this.commentFacade.getComments(postId);
    }

    @Public()
    @Get('/one/:id')
    getOne(@Param('id') id: string) {
        return this.commentFacade.getComment(id);
    }
}