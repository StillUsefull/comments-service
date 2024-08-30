import {Global, Module} from '@nestjs/common';
import {CommentModule} from "@lib/comment";
import {AuthModule} from "@lib/auth";
import {FilesModule} from "@lib/files";

@Global()
@Module({
    imports: [CommentModule, AuthModule, FilesModule],
    exports: [CommentModule, AuthModule, FilesModule]
})
export class DomainsModule {}
