import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginUserDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { ReturnLoginDto } from './dtos/returnLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<ReturnLoginDto> {
    return await this.authService.login(loginUserDto);
  }
}
