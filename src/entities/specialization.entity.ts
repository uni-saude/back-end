import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Doctor from "./doctors.entity";

@Entity("specializations_doctors")
class Specialization {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120, unique: true })
  name: string;

  @OneToMany(() => Doctor, (doctor) => doctor.specialization)
  doctor: Doctor[];
}

export default Specialization;
