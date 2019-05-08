import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { UsersController } from './Users/Users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './Users/Users.service';
import { VehiculosService } from './vehiculos/vehiculos.service';
import { User } from './Users/entities/User.entity';
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
      TypeOrmModule.forFeature([User]),
      TypeOrmModule.forFeature([Vehiculo]),
  ],
  controllers: [AppController, VehiculosController, UsersController],
  providers: [AppService, UsersService, VehiculosService],
})
export class AppModule {}
