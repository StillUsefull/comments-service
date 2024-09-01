import {Global, Module} from '@nestjs/common';
import {CommentModule} from "@lib/comment";
import {AuthModule} from "@lib/auth";
import {FilesModule} from "@lib/files";
import {UserModule} from "@lib/user";
import {ProvidersModule} from "@lib/providers/providers.module";

@Global()
@Module({
    imports: [CommentModule, AuthModule, FilesModule, UserModule],
    exports: [CommentModule, AuthModule, FilesModule, UserModule]
})
export class DomainsModule {}
