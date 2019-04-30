import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { ClientesController } from './clientes/clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesService } from './clientes/clientes.service';
import { VehiculosService } from './vehiculos/vehiculos.service';
import { Cliente } from './clientes/entities/cliente.entity';
import { Vehiculo } from './vehiculos/entities/vehiculo.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'nest',
        password: 'app',
        database: 'appnest_db',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([Cliente]),
      TypeOrmModule.forFeature([Vehiculo]),
  ],
  controllers: [AppController, VehiculosController, ClientesController],
  providers: [AppService, ClientesService, VehiculosService],
})
export class AppModule {}
