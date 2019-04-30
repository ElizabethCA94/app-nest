import { Injectable } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Cliente)
        private readonly clienteRepository: Repository<Cliente>,
      ) {}
      async getAll() {
        return await this.clienteRepository.find();
      }
      async createCliente(){
        return await this.clienteRepository.create();
      }
}
