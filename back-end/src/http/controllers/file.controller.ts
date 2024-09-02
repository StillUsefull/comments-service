import {Body, Controller, Post, UseGuards} from "@nestjs/common";
import {FilesService} from "@lib/files";
import {JwtGuard} from "@lib/auth/guards/jwt.guard";
import { GetFileDto } from "../dtos/get-file.dto";
import {Throttle} from "@nestjs/throttler";

@Controller('file')
export class FileController {

    constructor(private readonly fileService: FilesService) {
    }

    @UseGuards(JwtGuard)
    @Post()
    @Throttle({ default: { limit: 3, ttl: 60000 } })
    getUrl(@Body() params: GetFileDto){
        return this.fileService.generatePresignedUrl({mimetype: params.mimetype, extension: params.extension})
    }
}