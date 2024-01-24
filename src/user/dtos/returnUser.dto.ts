import { UserEntity } from "../entities/user.entity";

export class ReturnUserDto{
    constructor(userEntity: UserEntity) {
        this.id = userEntity.id;
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.cpf = userEntity.cpf;
        this.phone = userEntity.phone;
    }
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
}