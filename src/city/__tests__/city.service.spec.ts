import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { cityEntityMock } from '../__mocks__/cityEntityMock.mock';
import { CityService } from '../city.service';
import { CityEntity } from '../entities/city.entity';
import { CacheService } from '../../cache/cache.service';

describe('CityService', () => {
  let service: CityService;
  let cityRepository: Repository<CityEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: CacheService,
          useValue: {
            getCache: jest.fn().mockResolvedValue([cityEntityMock]),
          }
        },
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            find: jest.fn().mockResolvedValue([cityEntityMock]),
            findOne: jest.fn().mockResolvedValue(cityEntityMock)
          },
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
    cityRepository = module.get<Repository<CityEntity>>(
      getRepositoryToken(CityEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityRepository).toBeDefined();
  });

  it('should return cityById', async () => {
    
    const city = await service.getCityById(cityEntityMock.id);

    expect(city).toEqual(cityEntityMock);
  });

  it('should return error findOne not found', async () => {
    jest.spyOn(cityRepository, 'findOne').mockResolvedValue(undefined);

    expect(service.getCityById(cityEntityMock.id)).rejects.toThrow();
  });

  it('should return list of cities by StateId', async () => {
    
    const cities = await service.getAllCityByStateId(cityEntityMock.stateId);

    expect(cities).toEqual([cityEntityMock]);
  });

  it('should return list of cities', async () => {
    
    const cities = await service.getAllCity();

    expect(cities).toEqual([cityEntityMock]);
  });

  it('should return error list of cities', async () => {
    jest.spyOn(cityRepository, 'find').mockRejectedValue(new Error());

    expect(service.getAllCity()).rejects.toThrow();
  });
});
