import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<any>;
    findOne(id: string): Promise<UserModel>;
    create(userData: {
        login: string;
        name: string;
        email: string;
        password: string;
        rating: number;
    }): Promise<UserModel>;
}
