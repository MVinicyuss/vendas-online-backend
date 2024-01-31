import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '12345678901',
  created_at: new Date(),
  email: 'emailmock@gmail.com',
  id: 2312,
  name: 'name mock',
  password: 'passwordMock',
  phone: '12345678901',
  typeUser: UserType.User,
  updated_at: new Date(),
};
