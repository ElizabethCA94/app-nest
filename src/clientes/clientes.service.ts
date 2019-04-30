import { Injectable } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientesDto } from './dto/create-clientes-dto';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Cliente)
        private readonly clienteRepository: Repository<Cliente>,
      ) {}
      async getAll() {
        return await this.clienteRepository.find();
      }

      async createCliente(clienteNuevo: CreateClientesDto){
        const nuevo = new Cliente();
        nuevo.cedula = clienteNuevo.cedula;
        nuevo.nombres = clienteNuevo.nombres;
        nuevo.apellidos = clienteNuevo.apellidos;
        return this.clienteRepository.save(nuevo);
      }

      async updateCliente(idCliente: number, clienteActualizar: CreateClientesDto){
        const clienteUpdate = this.clienteRepository.findOne(idCliente);
        
      }
}
