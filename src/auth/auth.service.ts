import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ReturnLoginDto } from './dtos/returnLogin.dto';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { LoginPayloadDto } from './dtos/loginPayload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<ReturnLoginDto> {
    const user: UserEntity = await this.userService
      .findUserByEmail(loginUserDto.email)
      .catch((err) => {
        throw err;
      });

    const isPasswordValid = await hash(loginUserDto.password, user?.password);

    if (!isPasswordValid) {
      throw new Error('Email and Password not match');
    }

    return {
      accessToken: this.jwtService.sign({ ...new LoginPayloadDto(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
