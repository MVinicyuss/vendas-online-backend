import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/createAddress.dto';
import { ReturnAddressDto } from './dto/returnAddress.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @UsePipes(ValidationPipe)
  @Post("/:userId")
  async createAddress(@Body() createAddressDto: CreateAddressDto, @Param("userId") userId: number): Promise<ReturnAddressDto>{
    return (await this.addressService.createAddress(createAddressDto, userId).then((address) => new ReturnAddressDto(address)));
  }
}