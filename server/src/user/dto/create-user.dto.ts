import { Type } from 'class-transformer';
import { IsEmail, IsNumber, IsNumberString } from 'class-validator';

export class CreateUserDto {
  login: string;
  name: string;
  @IsEmail()
  email: string;
  password: string;
  @Type(() => Number)
  @IsNumber()
  rating: number;
}
