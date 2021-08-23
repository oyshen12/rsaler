import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  @Post()
  async createUser(
    @Body()
    userData: {
      login: string;
      name: string;
      email: string;
      password: string;
      rating: number;
    },
  ): Promise<UserModel> {
    userData.rating = Number(userData.rating); //TODO: change type properly
    return this.userService.createUser(userData);
  }
}
