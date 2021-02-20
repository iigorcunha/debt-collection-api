import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
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
}
