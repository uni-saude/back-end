import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Doctor from "./doctors.entity";
import Patient from "./patientsEntity";

@Entity("exams_patients")
class Exam {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  date_solicitation: Date;

  @Column({ nullable: true })
  date_apply: Date;

  @Column({ length: 64 })
  name: string;

  @Column({ default: false })
  status: boolean;

  @ManyToOne(() => Doctor, (doctor) => doctor.exam)
  doctor: Doctor;

  @ManyToOne(() => Patient, (patient) => patient.exam)
  patient: Patient;
}

export default Exam;
