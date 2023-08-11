export class CreateChatDto {
    id: string;
    content: string;
    roomId:string;
    sender: string;
    receiver: string;
    createAt: Date;
    updateAt: Date;
}
