import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-users-dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}
      async getAll() {
        return await this.userRepository.find();
      }

      async createUser(UserNuevo: CreateUsersDto) {
        const nuevo = new User();
        nuevo.cedula = UserNuevo.cedula;
        nuevo.nombres = UserNuevo.nombres;
        nuevo.apellidos = UserNuevo.apellidos;
        return this.userRepository.save(nuevo);
      }

      async updateUser(idUser: number, UserActualizar: CreateUsersDto) {
        const UserUpdate = await this.userRepository.findOne(idUser);
        UserUpdate.cedula = UserActualizar.cedula;
        UserUpdate.nombres = UserActualizar.nombres;
        UserUpdate.apellidos = UserActualizar.apellidos;

        return await this.userRepository.save(UserUpdate);
      }

      async deleteUser(idUser: number) {
        return await this.userRepository.delete(idUser);
      }
}
