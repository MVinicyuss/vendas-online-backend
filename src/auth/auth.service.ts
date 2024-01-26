import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginUserDto } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
    ){}

    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        const user: UserEntity = await this.userService.findUserByEmail(loginUserDto.email).catch((err) => {throw err});
        
        const isPasswordValid = await hash(loginUserDto.password, user?.password);
         
        if(!isPasswordValid){
            throw new Error('Email and Password not match');
        }

        return user;
    }
}
