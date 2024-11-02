import { Module } from '@nestjs/common';
import { LabelGroupService } from './label-group.service';
import { LabelGroupController } from './label-group.controller';
import { LabelGroupRepository } from 'src/labels/label-group/label-group.repository';

@Module({
  controllers: [LabelGroupController],
  providers: [LabelGroupService, LabelGroupRepository],
  exports: [LabelGroupService],
})
export class LabelGroupModule {}
