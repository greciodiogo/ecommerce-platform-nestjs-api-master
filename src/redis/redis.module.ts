import { Module } from '@nestjs/common';
// import { REDIS_CLIENT } from './redis.constants';
import * as Redis from 'redis';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    // {
    //   provide: REDIS_CLIENT,
    //   useFactory: (configService: ConfigService) =>
    //     Redis.createClient({
    //       host: 'redis',
    //       port: 6379,
    //     }),
    //   inject: [ConfigService],
    // },
  ],
  // exports: [REDIS_CLIENT],
  exports: [],
})
export class RedisModule {}
