import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Hospital from "./hospitals.entity";
import Doctor from "./doctors.entity";

@Entity("hospitals_work_doctors")
class HospitalsToWorkDoctors {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Hospital, (hospital) => hospital.hospitalToWorkDoctor)
  hospital: Hospital;

  @ManyToOne(() => Doctor, (doctor) => doctor.hospitalToWordDoctor)
  doctor: Doctor;
}

export default HospitalsToWorkDoctors;
