import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { identity } from 'rxjs';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    cedula: string;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;
}
