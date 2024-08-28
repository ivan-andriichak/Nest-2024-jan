import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';

import { GlobalExceptionFilter } from './common/http/global-exception.filter';
import configuration from './config/configuration';
import { LoggerModule } from './modules/logger/logger.module';
import { PostgresModule } from './modules/postgres/postgres.module';
import { PostsModule } from './modules/posts/posts.module';
import { RedisModule } from './modules/redis/redis.module';
import { RepositoryModule } from './modules/repository/repository.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    PostgresModule,
    RedisModule,
    AuthModule,
    UsersModule,
    PostsModule,
    LoggerModule,
    RepositoryModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
