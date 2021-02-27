import { Test, TestingModule } from '@nestjs/testing';
import { DebtPapersService } from './debt-papers.service';

describe('DebtPapersService', () => {
  let service: DebtPapersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebtPapersService],
    }).compile();

    service = module.get<DebtPapersService>(DebtPapersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
