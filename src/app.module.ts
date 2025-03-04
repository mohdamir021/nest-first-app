import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDataModule } from './user-data/user-data.module';

@Module({
  imports: [UserDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
