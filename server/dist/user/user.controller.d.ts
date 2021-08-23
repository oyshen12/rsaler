import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<UserModel[]>;
    findOne(id: string): Promise<UserModel>;
    createUser(userData: {
        login: string;
        name: string;
        email: string;
        password: string;
        rating: number;
    }): Promise<UserModel>;
}
