import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server } from 'socket.io';

@WebSocketGateway({core: true})
export class ChatGateway {
  @WebSocketServer() server: Server
  constructor(private chatService: ChatService) {}

  handleConnection(client: any, ...args: any[]) {
    console.log(`Client ${client.id} connected`);
  }

  handleDisconnect(client: any) {
    console.log(`Client ${client.id} disconnected`);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any){
    const roomID = payload.roomID;
    this.chatService.create(payload);
    this.server.emit(`message ${roomID}`, payload);  
  }
}
