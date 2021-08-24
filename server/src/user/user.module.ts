import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './user.service';

@Module({ providers: [PrismaService, UserService], exports: [UserService] })
export class UserModule {}
