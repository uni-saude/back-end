import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Address from "./addresses.entity";
import Appointment from "./appointments.entity";
import HospitalsToWorkDoctors from "./hospitalsToDoctor.entity";

@Entity("hospitals")
class Hospital {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 64 })
  name: string;

  @OneToMany(() => Appointment, (appointment) => appointment.hospital)
  appointment: Appointment[];

  @OneToMany(
    () => HospitalsToWorkDoctors,
    (hospitalToWorkDoctor) => hospitalToWorkDoctor.doctor
  )
  hospitalToWorkDoctor: HospitalsToWorkDoctors[];

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
}

export default Hospital;
