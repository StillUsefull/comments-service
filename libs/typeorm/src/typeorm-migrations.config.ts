import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

config({ path: join(process.cwd(), '.env') });
const configService = new ConfigService();

const options = (): DataSourceOptions => {
    const host = configService.get('DB_HOST');
    const port = configService.get<number>('DB_PORT');
    const username = configService.get('DB_USER');
    const password = configService.get('DB_PASSWORD');
    const database = configService.get('DB_NAME');
    if (!host || !port || !username || !password || !database) {
        throw new Error('Database connection parameters are missing');
    }
    const url = `postgres://${username}:${password}@${host}:${port}/${database}`;
    return {
        url,
        type: 'postgres',
        schema: 'public',
        logging: configService.get('IS_PROD') === false,
        entities: [],
        migrations: [],
        migrationsRun: true,
        migrationsTableName: 'migrations',
    };
};

export const appDataSource = new DataSource(options());
