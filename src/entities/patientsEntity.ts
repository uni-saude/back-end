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
import Diagnostic from "./diagnostics.entity";
import Exam from "./exams.entity";
import Medication from "./medications.entity";
import PatientToAddress from "./patientsToAddresses.entity";
import Tratament from "./trataments.entity";
import Tutor from "./tutors.entity";
import Vaccine from "./vaccines.entity";

@Entity("patients")
class Patient {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 11 })
  cpf: string;

  @Column()
  age: number;

  @Column({ length: 72, unique: true })
  email: string;

  @Column({ length: 72 })
  password: string;

  @Column({ length: 20 })
  genre: string;

  @Column({ length: 12 })
  phone: string;

  @Column({ length: 64 })
  father: string;

  @Column({ length: 64 })
  mother: string;

  @Column({ length: 2 })
  blood_type: string;

  @OneToMany(
    () => PatientToAddress,
    (patientToAddress) => patientToAddress.patient
  )
  address: PatientToAddress[];

  @ManyToOne(() => Tutor, (tutor) => tutor.patient)
  tutor: Tutor;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointment: Appointment[];

  @OneToMany(() => Tratament, (tratament) => tratament.patient)
  tratament: Tratament[];

  @OneToMany(() => Exam, (exam) => exam.patient)
  exam: Exam[];

  @OneToMany(() => Vaccine, (vaccine) => vaccine.patient)
  vaccine: Vaccine[];

  @OneToMany(() => Medication, (medication) => medication.patient)
  medication: Medication[];

  @OneToMany(() => Diagnostic, (diagnostic) => diagnostic.patient)
  diagnostic: Diagnostic[];

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
export default Patient;
