import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import {Server} from 'http';

@WebSocketGateway(1966,{cors: true})
export class ChatGateway {
  @WebSocketServer() server: Server
  constructor(private chatService: ChatService) {}

  @SubscribeMessage('chat')
  async handleChat(client: any, payload: any){
    let result = await this.chatService.create(payload);
    this.server.emit('chat', result[1]);
  }
}
