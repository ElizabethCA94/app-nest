import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesController } from './vehicles/vehicles.controller';
import { UsersController } from './Users/Users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './Users/Users.service';
import { VehiclesService } from './vehicles/vehicles.service';
import { User } from './Users/entities/User.entity';
import { Vehicle } from './vehicles/entities/vehicle.entity';

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
      TypeOrmModule.forFeature([Vehicle]),
  ],
  controllers: [AppController, VehiclesController, UsersController],
  providers: [AppService, UsersService, VehiclesService],
})
export class AppModule {}
