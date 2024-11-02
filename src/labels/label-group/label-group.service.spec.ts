import { Test, TestingModule } from '@nestjs/testing';
import { LabelGroupService } from './label-group.service';

describe('LabelGroupService', () => {
  let service: LabelGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabelGroupService],
    }).compile();

    service = module.get<LabelGroupService>(LabelGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
