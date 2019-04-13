import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateClientesDto } from './dto/create-clientes-dto';

@Controller('clientes')
export class ClientesController {
    @Post()
    create(@Body() createClientesDto: CreateClientesDto) {
        return 'cliente creado';
    }

    @Get()
    getAll() {
        return 'lista de clientes';
    }

    @Put(':id')
    update(@Body() updateClientesDto: CreateClientesDto) {
        return 'cliente actualizado';
    }

    @Delete(':id')
    delete() {
        return 'cliente eliminado';
    }
}
