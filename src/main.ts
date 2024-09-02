import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions} from "@nestjs/microservices";
import {rabbitOptions} from "@lib/providers/rabbitmq/rabbitmq.config";
import helmet from 'helmet'
import {ValidationPipe} from "@nestjs/common";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe())
  const microservice = app.connectMicroservice<MicroserviceOptions>(rabbitOptions) // ??? may it be standalone
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
