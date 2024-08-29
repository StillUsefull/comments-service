import { Module } from '@nestjs/common';
import {TypeormModule} from "./typeorm/typeorm.module";
import {MongodbModule} from "./mongodb/mongodb.module";
import {CacheStorageModule} from "@lib/providers/cache-storage/cache-storage.module";

@Module({
  imports: [
      TypeormModule,
      MongodbModule,
      CacheStorageModule
  ],
})
export class ProvidersModule {}
