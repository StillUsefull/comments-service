import { Module } from '@nestjs/common';
import {RESOLVERS} from "./resolvers";

@Module({
    providers: [...RESOLVERS]
})
export class GraphqlModule {}
