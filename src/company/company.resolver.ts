import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { DebtPaper } from 'src/debt-papers/debt-papers.entity';
import { GqlAuthGuard } from '../auth/auth.guard';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
import CompanyInput from './dto/company.input';

@Resolver()
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Company)
  public async createCompany(
    @Args('data') input: CompanyInput,
  ): Promise<Company> {
    const company = await this.companyService.create(input);

    return company;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Company])
  public async listAllCompanies(): Promise<Company[]> {
    const listCompanies = await this.companyService.listAll();

    return listCompanies;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Company)
  public async listByCompanyWithDebtPapers(
    @Args('id') id: string,
  ): Promise<Company> {
    const companyWithDebtPapers = await this.companyService.listByCompanyWithDebtPapers(
      id,
    );

    return companyWithDebtPapers;
  }
}
