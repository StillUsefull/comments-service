import {Global, Module} from '@nestjs/common';
import {CommentModule} from "@lib/comment";
import {UserModule} from "@lib/user";

@Global()
@Module({
    imports: [CommentModule, UserModule],
    exports: [CommentModule, UserModule]
})
export class DomainsModule {}
