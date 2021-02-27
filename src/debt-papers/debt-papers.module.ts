import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DebtPaper } from './debt-papers.entity';
import { DebtPapersResolver } from './debt-papers.resolver';
import { DebtPapersService } from './debt-papers.service';

@Module({
  imports: [TypeOrmModule.forFeature([DebtPaper])],
  providers: [DebtPapersResolver, DebtPapersService],
})
export class DebtPapersModule {}
