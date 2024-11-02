import { User } from '@prisma/client';
import { UserLabelEntity } from 'src/labels/user-label/entities/user-label.entity';

export class UserEntity implements User {
  id: string;
  name: string;

  userLabels: UserLabelEntity[];
}
