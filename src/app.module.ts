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
import path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'debt_collection',
      logging: true,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Ic@199265',
      keepConnectionAlive: true,
      entities: [path.resolve(__dirname, '**', '*.entity.{ts,js}')],
      migrations: [
        path.resolve(__dirname, 'database', 'migrations', '*.{ts,js}'),
      ],
      cli: {
        migrationsDir: path.resolve(__dirname, 'database', 'migrations'),
      },
    }),
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
