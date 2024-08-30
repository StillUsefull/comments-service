import { Module } from '@nestjs/common';
import {CONTROLLERS} from "./controllers";

@Module({
  controllers: [...CONTROLLERS]
})
export class HttpModule {}
