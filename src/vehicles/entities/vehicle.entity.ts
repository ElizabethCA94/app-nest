import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    placa: string;

    @Column()
    chasis: string;
}
