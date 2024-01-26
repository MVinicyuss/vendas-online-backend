import { ReturnCityDto } from 'src/city/dtos/returnCity.dto';
import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  constructor(addressEntity: AddressEntity) {
    this.complement = addressEntity.complement;
    this.number = addressEntity.number;
    this.cep = addressEntity.cep;
    this.city = addressEntity.city ? new ReturnCityDto(addressEntity.city) : undefined;
  }
  complement: string;
  number: number;
  cep: string;
  city?: ReturnCityDto;
}
