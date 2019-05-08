import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users-dto';

@Controller('Users')
export class UsersController {
    @Post()
    create(@Body() createUsersDto: CreateUsersDto) {
        return 'User creado';
    }

    @Get()
    getAll() {
        return 'lista de Users';
    }

    @Put(':id')
    update(@Body() updateUsersDto: CreateUsersDto) {
        return 'User actualizado';
    }

    @Delete(':id')
    delete() {
        return 'User eliminado';
    }
}
