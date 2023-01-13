import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import Doctor from "./doctors.entity";
import Patient from "./patientsEntity";

@Entity("trataments")
class Tratament {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 80 })
  name: string;

  @Column()
  initial_date: Date;

  @Column()
  final_date: Date;

  @ManyToOne(() => Patient, (patient) => patient.tratament)
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.tratament)
  doctor: Doctor;
}

export default Tratament;
