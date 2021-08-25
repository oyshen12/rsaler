import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  providers: [PrismaService, ProductService],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
