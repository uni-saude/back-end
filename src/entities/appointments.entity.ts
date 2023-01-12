import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Doctor from "./doctors.entity";
import Hospital from "./hospitals.entity";
import Patient from "./patientsEntity";

@Entity("appointments")
class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  solicitation_date: Date;

  @Column()
  appointment_date: Date;

  @Column({ length: 10 })
  appointment_date_type: string;

  @Column({ length: 72, unique: true })
  specialization: string;

  @ManyToOne(() => Patient, (patient) => patient.appointment)
  patient: Patient;

  @ManyToOne(() => Hospital, (hospital) => hospital.appointment)
  hospital: Hospital;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointment)
  doctor: Doctor;
}

export default Appointment;
