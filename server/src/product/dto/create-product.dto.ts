import { Type } from 'class-transformer';
import { IsBoolean, IsNumber } from 'class-validator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateProductDto {
  title: string;
  title_full: string;
  @Type(() => Number)
  @IsNumber()
  price: number;
  description: string;
  size: string;
  location: string;
  @Type(() => Boolean)
  @IsBoolean()
  active: boolean;
  pictures: string[];

  // user: CreateUserDto;
}
