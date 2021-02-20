import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import * as optionsOrm from './config/orm';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { CompanyResolver } from './company/company.resolver';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';
import { DebtorModule } from './debtor/debtor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(optionsOrm),
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      context: ({ req }) => ({ req }),
    }),
    AuthModule,
    CompanyModule,
    DebtorModule,
  ],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
