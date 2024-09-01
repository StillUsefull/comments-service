import { Module } from '@nestjs/common';
import { DomainsModule } from './domains/domains.module';
import { HttpModule } from './http/http.module';
import {ProvidersModule} from "@lib/providers/providers.module";
import {ConfigModule} from "@nestjs/config";
import {join} from "path";
import { GraphqlModule } from './graphql/graphql.module';
import {WebsocketModule} from "./ws/websocket.module";
import { RabbitControllersModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: join(process.cwd(), '.env')
      }),
      DomainsModule,
      HttpModule,
      ProvidersModule,
      WebsocketModule,
      GraphqlModule,
      RabbitControllersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
