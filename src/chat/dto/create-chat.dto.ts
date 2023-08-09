export class CreateChatDto {
    id: string;
    content: string;
    senders: string;
    receiver: string;
    createAt: Date;
    updateAt: Date;
}
