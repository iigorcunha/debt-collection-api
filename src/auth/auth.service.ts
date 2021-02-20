import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { UserService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async auth(cpf: string, password: string): Promise<AuthType> {
    const user = await this.usersService.findByCPF(cpf);
    const validPassword = compare(password, user.password);

    if (!validPassword) {
      throw new UnauthorizedException('Incorrect CPF/Password');
    }

    const token = await this.jwtToken(user);

    return {
      user,
      token,
    };
  }

  private async jwtToken(user: User): Promise<string> {
    const payload = { sub: user.id };
    return this.jwtService.signAsync(payload);
  }
}
