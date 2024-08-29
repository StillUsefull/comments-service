import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({type: String, unique: true})
    username: string;

    @Prop({type: String, unique: true})
    email: string;

    @Prop()
    createdAt: string;

    @Prop()
    updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);