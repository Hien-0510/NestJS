import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import {Server} from 'http';

@WebSocketGateway({cors: true})
export class ChatGateway {
  @WebSocketServer() server: Server
  constructor(private chatService: ChatService) {}


  handleConnection(client: any, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnection(client: any, ...args: any[]){
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('chat')
  async handleChat(client: any, payload: any){
    await this.chatService.create(payload);
    console.log(payload);
    this.server.emit(`chat - ${payload.roomId}`, payload);
  }
}
