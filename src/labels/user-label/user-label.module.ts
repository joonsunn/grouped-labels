import { forwardRef, Module } from '@nestjs/common';
import { UserLabelService } from './user-label.service';
import { UserLabelController } from './user-label.controller';
import { UserLabelRepository } from 'src/labels/user-label/user-label.repository';
import { LabelModule } from 'src/labels/label/label.module';
import { UserModule } from 'src/users/user/user.module';

@Module({
  controllers: [UserLabelController],
  providers: [UserLabelService, UserLabelRepository],
  imports: [
    LabelModule,
    // UserModule,
    forwardRef(() => UserModule),
  ],
  exports: [UserLabelService],
})
export class UserLabelModule {}
