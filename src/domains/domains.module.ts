import {Global, Module} from '@nestjs/common';
import {CommentModule} from "@lib/comment";
import {AuthModule} from "@lib/auth";

@Global()
@Module({
    imports: [CommentModule, AuthModule],
    exports: [CommentModule, AuthModule]
})
export class DomainsModule {}
