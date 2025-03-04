import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDataModule } from './user-data/user-data.module';
import { PostController } from './post/post.controller';

@Module({
  imports: [UserDataModule],
  controllers: [AppController, PostController],
  providers: [AppService],
})
export class AppModule {}
