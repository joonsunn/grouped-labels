import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
// import { UserModule } from './users/user/user.module';
import { DbService } from 'src/db/db.service';
import { UsersModule } from './users/users.module';
import { LabelsModule } from './labels/labels.module';

@Module({
  imports: [DbModule, UsersModule, LabelsModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
