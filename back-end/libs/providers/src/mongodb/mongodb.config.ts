import {ConfigService} from "@nestjs/config";

const configService = new ConfigService();

export const mongodbURI = configService.get<string>('MONGODB_URL');