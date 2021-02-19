import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  database: 'debt_collection',
  logging: true,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Ic@199265',
  keepConnectionAlive: true,
  entities: [path.resolve(__dirname, '..', '**', '*.entity.{ts,js}')],
  migrations: [path.resolve(__dirname, '..', 'database', 'migrations', '*')],
};

module.exports = options;
