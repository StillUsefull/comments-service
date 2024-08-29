import {ConfigService} from "@nestjs/config";
import {join} from "path";
import {config} from 'dotenv'

config({ path: join(process.cwd(), '.env') });
const configService = new ConfigService();

export const mongodbURI = configService.get<string>('MONGODB_URL');