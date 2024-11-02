import { Test, TestingModule } from '@nestjs/testing';
import { LabelGroupController } from './label-group.controller';
import { LabelGroupService } from './label-group.service';

describe('LabelGroupController', () => {
  let controller: LabelGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabelGroupController],
      providers: [LabelGroupService],
    }).compile();

    controller = module.get<LabelGroupController>(LabelGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
