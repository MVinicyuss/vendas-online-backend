import { AddressEntity } from "../entities/address.entity";

export class ReturnAddressDto{
    constructor(addressEntity: AddressEntity){
      this.complement = addressEntity.complement;
      this.number = addressEntity.number;
      this.cep = addressEntity.cep;
      this.cityId = addressEntity.cityId;
    }
    complement: string;
    number: number;
    cep: string;
    cityId: number;
  }