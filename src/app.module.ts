import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import * as optionsOrm from './config/orm';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { DebtorModule } from './debtor/debtor.module';
import { DebtPapersModule } from './debt-papers/debt-papers.module';

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
    DebtPapersModule,
  ],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
