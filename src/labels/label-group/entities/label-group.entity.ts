import { LabelGroup } from '@prisma/client';
import { LabelEntity } from 'src/labels/label/entities/label.entity';

export class LabelGroupEntity implements LabelGroup {
  id: string;
  name: string;
  labels: LabelEntity[];
}
