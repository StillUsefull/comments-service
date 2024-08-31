import { Injectable, BadRequestException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
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


    async generatePresignedUrl(): Promise<{ url: string, key: string }> {
        const fileName = `${uuidv4()}`;

        const key = `${fileName}`;

        const params = {
            Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
            Key: key,
            Expires: 60 * 5,
            ContentType: 'image/jpeg',
        };

        const url = await this.s3.getSignedUrlPromise('putObject', params);

        return { url, key };
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