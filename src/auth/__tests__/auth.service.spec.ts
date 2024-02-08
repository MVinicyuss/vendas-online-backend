import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';
import { jwtMock } from '../__mocks__/jwt.mock';
import { loginPayloadMock } from '../__mocks__/login-user.mock';
import { userEntityMock } from '../../user/__mocks__/userEntity.mock';
import { ReturnUserDto } from '../../user/dtos/returnUser.dto';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
            provide: UserService,
            useValue: {
                findUserByEmail: jest.fn().mockResolvedValue(userEntityMock),
            }
        },
        {
            provide: JwtService,
            useValue: {
                sign: () => jwtMock,
            }
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('should return user if email and password match', async () => {
    const user = await service.login(loginPayloadMock);

    expect(user).toEqual({
        accessToken: jwtMock,
        user: new ReturnUserDto(userEntityMock),
    })
  });

  it('should return user if email valid or password invalid match', async () => {
    const user = await service.login({ ...loginPayloadMock, password: '1234' });

    expect(user).toEqual({
        accessToken: jwtMock,
        user: new ReturnUserDto(userEntityMock),
    })
  });

});
