import { Test, TestingModule } from '@nestjs/testing';
import { DebtorService } from './debtor.service';

describe('DebtorService', () => {
  let service: DebtorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebtorService],
    }).compile();

    service = module.get<DebtorService>(DebtorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
