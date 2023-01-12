import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Patient from "./patientsEntity";

@Entity("tutors_patients")
class Tutor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 64 })
  name: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 12 })
  phone: string;

  @OneToMany(() => Patient, (patient) => patient.tutor)
  patient: Patient[];
}

export default Tutor;
