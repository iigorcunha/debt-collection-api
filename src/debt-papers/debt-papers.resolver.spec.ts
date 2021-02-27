import { Test, TestingModule } from '@nestjs/testing';
import { DebtPapersResolver } from './debt-papers.resolver';

describe('DebtPapersResolver', () => {
  let resolver: DebtPapersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebtPapersResolver],
    }).compile();

    resolver = module.get<DebtPapersResolver>(DebtPapersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
