import { ReturnUserDto } from '../../user/dtos/returnUser.dto';
import { UserEntity } from '../../user/entities/user.entity';

export class ReturnLoginDto {
  constructor(token: string, user: UserEntity) {
    this.accessToken = token;
    this.user = user;
  }
  accessToken: string;
  user: ReturnUserDto;
}
