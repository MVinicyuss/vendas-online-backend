import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    
    @Get()
    async getAllUsers() {
        return JSON.stringify({test: 'test'});
    }

    @Post()
    async createUser() {
        return JSON.stringify({test: 'test'});
    }
}
