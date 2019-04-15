import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehiculo {
    @PrimaryGeneratedColumn()
    placa: string;

    @Column()
    chasis: string;
}
