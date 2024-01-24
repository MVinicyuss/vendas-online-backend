import { Module } from '@nestjs/common';
import { CacheModule as CacheModuleNest } from '@nestjs/cache-manager';
import { CacheService } from './cache.service';

@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 120000, // 2 minutes
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
