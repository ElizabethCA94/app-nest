import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateVehiclesDto } from './dto/create-vehicles-dto';

@Controller('vehicles')
export class VehiclesController {
    @Post()
    create(@Body() createVehiclesDto: CreateVehiclesDto) {
        return 'vehicle creado';
    }

    @Get()
    getAll() {
        return 'lista de vehicles';
    }

    @Put(':id')
    update(@Body() updateUsersDto: CreateVehiclesDto) {
        return 'vehicle actualizado';
    }

    @Delete(':id')
    delete() {
        return 'vehicle eliminado';
    }
}
