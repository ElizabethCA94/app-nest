import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { ClientesController } from './clientes/clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  ],
  controllers: [AppController, VehiculosController, ClientesController],
  providers: [AppService],
})
export class AppModule {}
