import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat{
    @Prop()
    name: string;
    @Prop()
    content: string;
    @Prop()
    sender: string;
    @Prop()
    receiver: string;
    @Prop()
    createAt: Date;
    @Prop()
    updateAt: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);