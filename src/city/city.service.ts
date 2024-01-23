import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {
  constructor(
      @InjectRepository(CityEntity)
      private readonly cityRepository: Repository<CityEntity>,
      @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

  async getAllCity() {
    return this.cityRepository.find();
  }

  async getAllCityByStateId(stateId: number) {
    const citiesCache: CityEntity[] = await this.cacheManager.get(
        `state_${stateId}`,
      );

    if(citiesCache){
      return citiesCache;
    }
    
    //Armazenando em Cache
    const cities = await this.cityRepository.find({ where: { stateId } });
    await this.cacheManager.set(`state_${stateId}`, cities);

    return cities;
  }
}
