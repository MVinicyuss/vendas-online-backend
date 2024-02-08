import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AddressService } from '../address.service';
import { AddressEntity } from '../entities/address.entity';
import { addressEntityMock } from '../__mocks__/addressEntityMock.mock';
import { UserService } from '../../user/user.service';
import { CityService } from '../../city/city.service';
import { cityEntityMock } from '../../city/__mocks__/cityEntityMock.mock';
import { userEntityMock } from '../../user/__mocks__/userEntity.mock';
import { createAddressMock } from '../__mocks__/createEntityMock.mock';

describe('AddressService', () => {
  let service: AddressService;
  let addressRepository: Repository<AddressEntity>;
  let userService: UserService;
  let cityService: CityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressService,
        {
          provide: UserService,
          useValue: {
            getUserById: jest.fn().mockResolvedValue(userEntityMock),
          }
        },
        {
          provide: CityService,
          useValue: {
            getCityById: jest.fn().mockResolvedValue(cityEntityMock),
          }
        },
        {
          provide: getRepositoryToken(AddressEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(addressEntityMock)
          },
        },
      ],
    }).compile();

    service = module.get<AddressService>(AddressService);
    cityService = module.get<CityService>(CityService);
    userService = module.get<UserService>(UserService);
    addressRepository = module.get<Repository<AddressEntity>>(
      getRepositoryToken(AddressEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityService).toBeDefined();
    expect(userService).toBeDefined();
    expect(addressRepository).toBeDefined();
  });

  it('should return address after save', async() => {
    const address = await service.createAddress(createAddressMock, userEntityMock.id);

    expect(address).toEqual(addressEntityMock);
  });

  it('should return error if exception userService', async() => {
    jest.spyOn(userService, 'getUserById').mockRejectedValue(new Error());

    expect(
      service.createAddress(createAddressMock, userEntityMock.id)
    ).rejects.toThrow();
  });

  it('should return error if exception cityService', async() => {
    jest.spyOn(cityService, 'getCityById').mockRejectedValue(new Error());

    expect(
      service.createAddress(createAddressMock, userEntityMock.id)
    ).rejects.toThrow();
  });

  

});
