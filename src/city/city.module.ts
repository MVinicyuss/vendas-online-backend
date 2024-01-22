import { Module } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './city.controller';
import { CityService } from './city.service';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
