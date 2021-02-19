import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { UserService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async auth(cpf: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(cpf);
    if (user && compare(pass, user.password)) {
      console.log(user);
      const payload = { sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

    return null;
  }
}
