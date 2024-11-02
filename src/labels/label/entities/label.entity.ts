import { Label } from '@prisma/client';
import { LabelGroupEntity } from 'src/labels/label-group/entities/label-group.entity';

export class LabelEntity implements Label {
  id: string;
  name: string;
  labelGroupId: string;
  group: LabelGroupEntity;
}
