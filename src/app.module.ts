import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import * as optionsOrm from './config/orm';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot(optionsOrm),
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
