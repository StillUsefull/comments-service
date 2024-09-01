import {Controller, Get, UseGuards} from "@nestjs/common";
import {FilesService} from "@lib/files";
import {JwtGuard} from "@lib/auth/guards/jwt.guard";

@Controller('file')
export class FileController {

    constructor(private readonly fileService: FilesService) {
    }

    @UseGuards(JwtGuard)
    @Get()
    getUrl(){
        return this.fileService.generatePresignedUrl()
    }
}