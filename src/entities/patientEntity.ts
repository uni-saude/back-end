import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('patients')
export class Patients{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length:64})
    name: string

    @Column({unique:true, length:11})
    cpf: string

    @Column()
    age: number

    @Column({length:72, unique:true})
    email: string

    @Column({length:20})
    genre: string

    @Column({length:12})
    phone: string

    @Column({length:64, nullable:true})
    father: string

    @Column({length:64, nullable:true})
    mother: string

    @Column({length:2})
    blood_type: string

    @Column({})
    tutor: string
}
