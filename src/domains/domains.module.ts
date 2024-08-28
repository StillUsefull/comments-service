import {Global, Module} from '@nestjs/common';
import {CommentModule} from "@lib/comment";

@Global()
@Module({
    imports: [CommentModule],
    exports: [CommentModule]
})
export class DomainsModule {}
