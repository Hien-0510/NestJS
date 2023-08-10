export interface CreateUserDto {
    name: string;
    username: string;
    avatar: string;
    dob: Date;
    email: string;
    password: string;
    createAt: Date;
    updateAt: Date;
    isDeleted: boolean;
    isOnline: boolean;
}