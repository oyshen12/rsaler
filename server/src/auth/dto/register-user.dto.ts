import { Type } from 'class-transformer';
import { IsEmail, IsNumber } from 'class-validator';

export class RegisterUserDto {
  name: string;
  @IsEmail()
  email: string;
  password: string;
  //TODO: ADD GUARD
  phoneNumber: string;
}
