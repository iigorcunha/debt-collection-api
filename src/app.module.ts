import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import * as optionsOrm from './config/orm';

@Module({
  imports: [TypeOrmModule.forRoot(optionsOrm), UserModule],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
