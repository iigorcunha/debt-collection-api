import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import CompanyInput from './dto/company.input';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async listAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async create(data: CompanyInput): Promise<Company> {
    const company = this.companyRepository.create(data);
    await this.companyRepository.save(company);

    return company;
  }

  async listByCompanyWithDebtPapers(id: string): Promise<Company> {
    const company = await this.companyRepository.findOne(id, {
      relations: ['debtPapers'],
    });

    return company;
  }
}
