import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Chat } from './schema/chat.shema';
import { Model } from 'mongoose';
@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) public chatModel: Model<Chat>) {}

  // đã xong
  create(createChatDto: CreateChatDto) {
    createChatDto.createAt = new Date();
    createChatDto.updateAt = new Date();
    return this.chatModel.create(createChatDto);
  }
  getAll() {
    return this.chatModel.find();
  }

  GetAllById(roomId: string) {
    return this.chatModel.find({roomId: roomId});
  }

  //đã xong
  getOne(id: string) {
    return this.chatModel.findOne({id: id});
  }
  //đã xong
  update(id: string, updateChatDto: UpdateChatDto) {
    updateChatDto.updateAt = new Date();
    return this.chatModel.findOneAndUpdate({id: id}, updateChatDto)
  }

  //đã xong
  remove(id: string) {
    return this.chatModel.findOneAndDelete({id: id})
  }
}