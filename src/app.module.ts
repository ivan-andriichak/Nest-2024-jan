import { Module } from '@nestjs/common';

import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, PostsModule],
})
export class AppModule {}
