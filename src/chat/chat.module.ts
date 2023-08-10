import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './schema/chat.shema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }])],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway]
})
export class ChatModule {}
