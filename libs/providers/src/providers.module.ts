import { Module } from '@nestjs/common';
import {TypeormModule} from "./typeorm/typeorm.module";
import {MongodbModule} from "./mongodb/mongodb.module";

@Module({
  imports: [TypeormModule, MongodbModule],
})
export class ProvidersModule {}
