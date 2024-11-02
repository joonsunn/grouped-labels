import { UserLabel } from '@prisma/client';
import { LabelEntity } from 'src/labels/label/entities/label.entity';
import { UserEntity } from 'src/users/user/entities/user.entity';

export class UserLabelEntity implements UserLabel {
  id: string;
  labelId: string;
  userId: string;

  label: LabelEntity;
  user: UserEntity;
}
