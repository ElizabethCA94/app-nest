import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateVehiculosDto } from './dto/create-vehiculos-dto';

@Controller('vehiculos')
export class VehiculosController {
    @Post()
    create(@Body() createVehiculosDto: CreateVehiculosDto) {
        return 'vehiculo creado';
    }

    @Get()
    getAll() {
        return 'lista de vehiculos';
    }

    @Put(':id')
    update(@Body() updateUsersDto: CreateVehiculosDto) {
        return 'vehiculo actualizado';
    }

    @Delete(':id')
    delete() {
        return 'vehiculo eliminado';
    }
}
