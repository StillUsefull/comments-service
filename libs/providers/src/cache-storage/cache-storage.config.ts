import * as redisStore from "cache-manager-redis-store";
import {join} from "path";
import {ConfigService} from "@nestjs/config";
import {config} from 'dotenv'

config({ path: join(process.cwd(), '.env') });
const configService = new ConfigService();

console.log()
export const RedisConfig = {
    isGlobal: true,
    store: redisStore,
    host: configService.get<string>('REDIS_HOST'),
    port: Number(configService.get<number>('REDIS_PORT')),
}