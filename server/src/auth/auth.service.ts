import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = (
      await this.userService.users({
        where: { email: username },
      })
    )[0];

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  //TODO: rating = optional, remove login
  async register(user: any, pass: string): Promise<any> {
    const { login, email, name, password } = user;
    const createdUser = await this.userService.createUser({
      email,
      name,
      password,
      rating: 0,
    });
  }

  //TODO: change to DTO | interface
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
