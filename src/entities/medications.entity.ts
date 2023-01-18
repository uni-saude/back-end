import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Patient from "./patientsEntity";

@Entity("medications_patients")
class Medication {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 64 })
  name: string;

  @Column({ length: 64 })
  tratament: string;

  @Column()
  initial_date: Date;

  @Column({ length: 200 })
  description: string;

  @Column({ nullable: true })
  final_date: Date;

  @ManyToOne(() => Patient, (patient) => patient.medication)
  patient: Patient;
}

export default Medication;
