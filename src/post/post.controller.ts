import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {
  @Get()
  getPosts(): string {
    return 'This is a post';
  }
}
