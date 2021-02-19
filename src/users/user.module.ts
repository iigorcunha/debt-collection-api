import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';
import { User } from './user.entity';
import UserResolver from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
  controllers: [UserController],
  exports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
