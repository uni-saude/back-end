import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Patient from "./patientsEntity";

@Entity("diagnostics_patients")
class Diagnostic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 80 })
  name: string;

  @Column({ length: 120 })
  tratament: string;

  @ManyToOne(() => Patient, (patient) => patient.diagnostic)
  patient: Patient;
}

export default Diagnostic;
