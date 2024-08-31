import {Controller, Get} from "@nestjs/common";
import {FilesService} from "@lib/files";

@Controller('file')
export class FileController {

    constructor(private readonly fileService: FilesService) {
    }

    @Get()
    getUrl(){
        return this.fileService.generatePresignedUrl()
    }
}