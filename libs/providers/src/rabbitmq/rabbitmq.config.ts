import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {ConfigService} from "@nestjs/config";
const configService = new ConfigService();

export const rabbitOptions: MicroserviceOptions =
    {
        transport: Transport.RMQ,
        options: {
            urls: [configService.get<string>('RABBIT_URL')],
            queue: configService.get<string>('RABBIT_QUEUE'),
            queueOptions: {
                durable: false,
            },
        },
    };
