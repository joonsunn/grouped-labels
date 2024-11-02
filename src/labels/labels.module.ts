import { Module } from '@nestjs/common';
import { LabelModule } from './label/label.module';
import { LabelGroupModule } from './label-group/label-group.module';
import { UserLabelModule } from './user-label/user-label.module';

@Module({
  imports: [LabelModule, LabelGroupModule, UserLabelModule],
})
export class LabelsModule {}
