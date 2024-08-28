import { Module } from '@nestjs/common';
import { DomainsModule } from './domains/domains.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [DomainsModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
