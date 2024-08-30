import { Injectable, BadRequestException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as sharp from 'sharp';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
    private readonly s3 = new AWS.S3();

    constructor(
        private readonly configService: ConfigService
    ) {
        AWS.config.update({
            accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
            secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
            region: this.configService.get<string>('AWS_REGION'),
        });
    }

    async processImage(file: Express.Multer.File): Promise<Buffer> {
        const buffer = await sharp(file.buffer)
            .resize({ width: 320, height: 240 })
            .toBuffer();
        return buffer;
    }

    async uploadFileToS3(file: Express.Multer.File, key: string): Promise<string> {
        const params = {
            Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
            Key: key,
            Body: file.buffer,
            ACL: 'public-read',
        };

        const data = await this.s3.upload(params).promise();
        return data.Location;
    }

    async uploadFile(file: Express.Multer.File): Promise<string | void>  {
        const fileExtension = file.originalname.split('.').pop();
        const fileName = `${uuidv4()}.${fileExtension}`;
        let fileBuffer = file.buffer;

        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            fileBuffer = await this.processImage(file);
        } else if (file.mimetype === 'text/plain' && file.size > 100 * 1024) {
            throw new BadRequestException('Text files cannot exceed 100 kB');
        } else if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|plain)$/)) {
            throw new BadRequestException('Invalid file type');
        }

        const fileUrl = await this.uploadFileToS3({ ...file, buffer: fileBuffer }, fileName).catch(err => {
            throw new BadRequestException('Error saving file');
        })

        return fileUrl;
    }
}
