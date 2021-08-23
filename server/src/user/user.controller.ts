import {
  Body,
  Controller,
  Get,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UserModel> {
    return this.userService.user({ id });
  }

  @Post()
  createUser(
    @Body()
    userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
