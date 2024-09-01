import { Module } from '@nestjs/common';
import {TypeormModule} from "./typeorm/typeorm.module";
import {MongodbModule} from "./mongodb/mongodb.module";
import {CacheStorageModule} from "@lib/providers/cache-storage/cache-storage.module";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriverConfig} from "@nestjs/apollo";
import {apolloDriverConfig} from "@lib/providers/graphql/apollo-driver.config";

@Module({
  imports: [
      TypeormModule,
      MongodbModule,
      CacheStorageModule,
      GraphQLModule.forRoot<ApolloDriverConfig>(apolloDriverConfig),
  ],
})
export class ProvidersModule {}
