import { Module } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelController } from './label.controller';
import { LabelRepository } from 'src/labels/label/label.repository';
import { LabelGroupModule } from 'src/labels/label-group/label-group.module';

@Module({
  controllers: [LabelController],
  providers: [LabelService, LabelRepository],
  imports: [LabelGroupModule],
  exports: [LabelService],
})
export class LabelModule {}
