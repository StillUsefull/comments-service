import {Body, Controller, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {CommentFacade} from "@lib/comment/application/comment.facade";
import {CreateCommentDto, UpdateCommentDto} from "../dtos";
import {JwtGuard} from "@lib/auth/guards/jwt.guard";
import {Public} from "@lib/auth/decorators";

@UseGuards(JwtGuard)
@Controller('comment')
export class CommentController {
    constructor(private readonly commentFacade: CommentFacade) {}

    @Post('/:postId')
    create(@Body() comment: CreateCommentDto, @Param('postId') postId: string){
        return this.commentFacade.createComment({...comment, postId})
    }

    @Put('/:id')
    update(@Body() comment: UpdateCommentDto, @Param('id') id: string){
        return this.commentFacade.updateComment({...comment, id});
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