import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/auth.guard';
import { DebtPaper } from './debt-papers.entity';
import { DebtPapersService } from './debt-papers.service';
import DebtPaperInput from './dto/debt-paper.input';

@Resolver()
export class DebtPapersResolver {
  constructor(private readonly debtPapersService: DebtPapersService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => DebtPaper)
  public async createDebtPaper(
    @Args('data') input: DebtPaperInput,
  ): Promise<DebtPaper> {
    const company = await this.debtPapersService.create(input);

    return company;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [DebtPaper])
  public async listAllDebtPapers(): Promise<DebtPaper[]> {
    const listCompanies = await this.debtPapersService.listAll();

    return listCompanies;
  }
}
