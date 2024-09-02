import {MongooseModule} from "@nestjs/mongoose";
import {Module} from "@nestjs/common";
import {mongodbURI} from "@lib/providers/mongodb/mongodb.config";


@Module({
    imports: [MongooseModule.forRoot(mongodbURI)]
})
export class MongodbModule {}