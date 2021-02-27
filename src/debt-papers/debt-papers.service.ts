import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DebtPaper } from './debt-papers.entity';
import DebtPaperInput from './dto/debt-paper.input';

@Injectable()
export class DebtPapersService {
  constructor(
    @InjectRepository(DebtPaper)
    private debtPaperRepository: Repository<DebtPaper>,
  ) {}

  async listAll(): Promise<DebtPaper[]> {
    return this.debtPaperRepository.find();
  }

  async create(data: DebtPaperInput): Promise<DebtPaper> {
    const debtPaper = this.debtPaperRepository.create(data);
    await this.debtPaperRepository.save(debtPaper);

    return debtPaper;
  }
}
