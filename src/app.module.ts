import { Module } from '@nestjs/common';
import { DomainsModule } from './domains/domains.module';
import { HttpModule } from './http/http.module';
import {ProvidersModule} from "@lib/providers/providers.module";
import {ConfigModule} from "@nestjs/config";
import {join} from "path";

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: join(process.cwd(), '.env')
      }),
      DomainsModule,
      HttpModule,
      ProvidersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
