import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { ClientesController } from './clientes/clientes.controller';

@Module({
  imports: [],
  controllers: [AppController, VehiculosController, ClientesController],
  providers: [AppService],
})
export class AppModule {}
