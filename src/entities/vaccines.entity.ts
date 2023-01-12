import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Patient from "./patientsEntity";

@Entity("vaccines_patients")
class Vaccine {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 64 })
  name: string;

  @Column()
  date_apply: Date;

  @Column()
  dose: number;

  @Column()
  next_dose: number;

  @ManyToOne(() => Patient, (patient) => patient.vaccine)
  patient: Patient;
}

export default Vaccine;
