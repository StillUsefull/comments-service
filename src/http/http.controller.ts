import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {CommentFacade} from "@lib/comment/application/comment.facade";
import {CreateCommentDto, UpdateCommentDto} from "./dtos";

@Controller('http')
export class HttpController {
    constructor(private readonly commentFacade: CommentFacade) {}

    @Post('/:postId')
    create(@Body() comment: CreateCommentDto, @Param('postId') postId: string){
        return this.commentFacade.createComment({...comment, postId})
    }

    @Put('/:id')
    update(@Body() comment: UpdateCommentDto, @Param('id') id: string){
        return this.commentFacade.updateComment({...comment, id});
    }

    @Get('/:postId')
    getAll(@Param('postId') postId: string){
        return this.commentFacade.getComments(postId);
    }

    @Get('/one/:id')
    getOne(@Param('id') id: string) {
        return this.commentFacade.getComment(id);
    }
}
