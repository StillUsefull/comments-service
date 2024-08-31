import { Module } from '@nestjs/common';
import {TypeormModule} from "./typeorm/typeorm.module";
import {MongodbModule} from "./mongodb/mongodb.module";
import {CacheStorageModule} from "@lib/providers/cache-storage/cache-storage.module";
import {WebsocketGateway} from "@lib/providers/ws/websocket.gateway";

@Module({
  imports: [
      TypeormModule,
      MongodbModule,
      CacheStorageModule
  ],
    providers: []
})
export class ProvidersModule {}
