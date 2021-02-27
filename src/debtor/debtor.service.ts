import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Debtor } from './debtor.entity';
import DebtorInput from './dto/debtor.input';

@Injectable()
export class DebtorService {
  constructor(
    @InjectRepository(Debtor)
    private debtorRepository: Repository<Debtor>,
  ) {}

  public async listAllDebtor(): Promise<Debtor[]> {
    return this.debtorRepository.find({
      relations: ['address'],
    });
  }

  public async createDebtor(input: DebtorInput): Promise<Debtor> {
    const debtor = this.debtorRepository.create(input);
    await this.debtorRepository.save(debtor);

    return debtor;
  }
}
