import {Body, Controller, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors} from "@nestjs/common";
import {CommentFacade} from "@lib/comment/application/comment.facade";
import {CreateCommentDto, UpdateCommentDto} from "../dtos";
import {JwtGuard} from "@lib/auth/guards/jwt.guard";
import {Public} from "@lib/auth/decorators";
import {FileInterceptor} from "@nestjs/platform-express";
import {FilesService} from "@lib/files";
import {multerOptions} from "@lib/files/files.options";

@UseGuards(JwtGuard)
@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentFacade: CommentFacade,
        private readonly filesService: FilesService
    ) {}

    @Post('/:postId')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async create(
        @UploadedFile() file: Express.Multer.File,
        @Body() comment: CreateCommentDto,
        @Param('postId') postId: string
    ){
        let fileUrl: string | null = null;

        if (file) {
            fileUrl = await this.filesService.uploadFile(file);
        }
        return this.commentFacade.createComment({...comment, postId, photo: fileUrl})
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