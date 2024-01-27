import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { UserEntity } from 'src/user/entities/user.entity';

export class ReturnLoginDto {
  constructor(token: string, user: UserEntity) {
    this.accessToken = token;
    this.user = user;
  }
  accessToken: string;
  user: ReturnUserDto;
}
