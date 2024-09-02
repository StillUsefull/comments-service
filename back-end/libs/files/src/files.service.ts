import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { IMimetype } from './interfaces/mimetype.interface';

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


    async generatePresignedUrl(mimetype: IMimetype): Promise<{ url: string, fileName: string }> {
        const validMimeTypes = {
            'image/jpeg': ['jpg', 'jpeg'],
            'image/gif': ['gif'],
            'image/png': ['png'],
            'text/plain': ['txt'],
        };
    
        if (!validMimeTypes[mimetype.mimetype] || !validMimeTypes[mimetype.mimetype].includes(mimetype.extension)) {
            throw new BadRequestException('Invalid MIME type or extension');
        }
        const fileName = `${uuidv4()}.${mimetype.extension}`;
    
        const params = {
            Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
            Key: fileName,
            Expires: 60 * 5, 
            'ACL': 'public-read', 
            ContentType: mimetype.mimetype, 
        };
    
        try {
            const url = await this.s3.getSignedUrlPromise('putObject', params);
            return { url, fileName };
        } catch (error) {
            console.error('Error generating presigned URL', error);
            throw new InternalServerErrorException('Error generating presigned URL');
        }
    }

    async deletePhoto(keys: string[]): Promise<void> {
        const params = {
            Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
            Delete: {
                Objects: keys.map(key => ({ Key: key })),
                Quiet: false,
            }
        };

        await this.s3.deleteObjects(params).promise().catch(err => {
            throw new BadRequestException('Error deleting file');
        });
    }
}