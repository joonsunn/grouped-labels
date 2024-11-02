import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from 'src/users/user/user.repository';
import { UserLabelModule } from 'src/labels/user-label/user-label.module';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
  imports: [forwardRef(() => UserLabelModule)],
})
export class UserModule {}
