import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: Repository<CityEntity>) {}

  async getAllCity() {
    return this.cityRepository.find();
  }
}
