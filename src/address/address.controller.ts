import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { ReturnAddressDto } from './dtos/returnAddress.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @UsePipes(ValidationPipe)
  @Post()
  @Roles(UserType.User)
  async createAddress(@Body() createAddressDto: CreateAddressDto, @UserId() userId: number): Promise<ReturnAddressDto>{
    return (await this.addressService.createAddress(createAddressDto, userId).then((address) => new ReturnAddressDto(address)));
  }
}