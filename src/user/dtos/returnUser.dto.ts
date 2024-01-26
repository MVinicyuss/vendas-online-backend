import { ReturnAddressDto } from 'src/address/dtos/returnAddress.dto';
import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.cpf = userEntity.cpf;
    this.phone = userEntity.phone;
    this.addresses = userEntity.addresses?.map(
      (address) => new ReturnAddressDto(address),
    );
  }
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  addresses?: ReturnAddressDto[];
}
