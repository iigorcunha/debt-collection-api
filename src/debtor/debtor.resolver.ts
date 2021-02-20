import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { Debtor } from './debtor.entity';
import { DebtorService } from './debtor.service';
import DebtorInput from './dto/debtor.input';

@Resolver()
export class DebtorResolver {
  constructor(private readonly debtorService: DebtorService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Debtor)
  public async createDebtor(@Args('data') input: DebtorInput): Promise<Debtor> {
    const company = await this.debtorService.createDebtor(input);

    return company;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Debtor])
  public async listAllDebtor(): Promise<Debtor[]> {
    const listCompanies = await this.debtorService.listAllDebtor();

    return listCompanies;
  }
}
