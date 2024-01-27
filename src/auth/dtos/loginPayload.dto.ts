import { UserEntity } from 'src/user/entities/user.entity';

export class loginPayloadDto {
  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.typeUser = userEntity.typeUser;
  }
  id: number;
  typeUser: number;
}
