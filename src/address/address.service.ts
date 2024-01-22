import { Injectable } from '@nestjs/common';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(private readonly addressRepository: Repository<AddressEntity>) {}

  async getAllAddress() {
    return this.addressRepository.find();
  }
}
