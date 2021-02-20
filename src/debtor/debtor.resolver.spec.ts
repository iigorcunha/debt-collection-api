import { Test, TestingModule } from '@nestjs/testing';
import { DebtorResolver } from './debtor.resolver';

describe('DebtorResolver', () => {
  let resolver: DebtorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebtorResolver],
    }).compile();

    resolver = module.get<DebtorResolver>(DebtorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
