import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/createUser.dto';
import { UserService } from './user.service';
import { ReturnUserDto } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUser(): Promise<ReturnUserDto[]>{
    return (await this.userService.getAllUser()).map((UserEntity) => new ReturnUserDto(UserEntity));
  }

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<ReturnUserDto>{
    return (await this.userService.createUser(createUser).then((user) => new ReturnUserDto(user)));
  }
}
