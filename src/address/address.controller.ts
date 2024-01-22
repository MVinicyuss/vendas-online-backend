import { Controller, Get } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async getAllAddress(): Promise<AddressEntity[]> {
    return this.addressService.getAllAddress();
  }
}
