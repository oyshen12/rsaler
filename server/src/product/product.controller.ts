import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product as ProductModel } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll(): Promise<ProductModel[]> {
    return this.productService.products({});
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<ProductModel> {
    return this.productService.product({ id });
  }

  @Post()
  async createProduct(
    @Body()
    productData: CreateProductDto,
  ): Promise<ProductModel> {
    return this.productService.createProduct(productData);
  }
}
