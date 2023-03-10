import { hashSync } from "bcrypt";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  BeforeInsert,
} from "typeorm";
import Appointment from "./appointments.entity";
import Exam from "./exams.entity";
import HospitalsToWorkDoctors from "./hospitalsToDoctor.entity";
import Specialization from "./specialization.entity";
import Tratament from "./trataments.entity";

@Entity("doctors")
class Doctor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 64 })
  name: string;

  @Column({ length: 11, unique: true })
  crm: string;

  @Column({ length: 72, unique: true })
  email: string;

  @Column({ length: 72 })
  password: string;

  @OneToMany(
    () => HospitalsToWorkDoctors,
    (hospitalsToWorkDoctors) => hospitalsToWorkDoctors.doctor
  )
  hospitalToWordDoctor: HospitalsToWorkDoctors[];

  @OneToMany(() => Appointment, (appointment) => appointment.hospital)
  appointment: Appointment[];

  @OneToMany(() => Tratament, (tratament) => tratament.doctor)
  tratament: Tratament[];

  @OneToMany(() => Exam, (exam) => exam.patient)
  exam: Exam[];

  @ManyToOne(() => Specialization, (specialization) => specialization.doctor)
  specialization: Specialization;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}

export default Doctor;
