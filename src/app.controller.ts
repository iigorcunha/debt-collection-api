import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { UserService } from './users/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.userService.findAll();
  }
}
