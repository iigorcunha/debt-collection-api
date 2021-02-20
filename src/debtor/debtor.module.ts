import { Module } from '@nestjs/common';
import { DebtorService } from './debtor.service';
import { DebtorResolver } from './debtor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Debtor } from './debtor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Debtor])],
  providers: [DebtorService, DebtorResolver],
})
export class DebtorModule {}
