import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions} from "@nestjs/microservices";
import {rabbitOptions} from "@lib/providers/rabbitmq/rabbitmq.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microservice = app.connectMicroservice<MicroserviceOptions>(rabbitOptions)
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
