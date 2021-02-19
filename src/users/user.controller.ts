import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { create } from 'domain';
import { CreateUserDTO } from './create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getUser(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/create-users')
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.create(createUserDTO);
  }
}
