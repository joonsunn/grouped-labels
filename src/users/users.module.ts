import { Module } from '@nestjs/common';
import { UserController } from 'src/users/user/user.controller';
import { UserModule } from 'src/users/user/user.module';

@Module({
  controllers: [UserController],
  //   providers: [UserService, UserRepository],
  imports: [UserModule],
})
export class UsersModule {}
