import { Module } from '@nestjs/common';
import { DomainsModule } from './domains/domains.module';
import { HttpModule } from './http/http.module';
import {ProvidersModule} from "@lib/providers/providers.module";

@Module({
  imports: [DomainsModule, HttpModule, ProvidersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
