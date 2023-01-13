import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from "typeorm";
import Hospital from "./hospitals.entity";
import PatientToAddress from "./patientsToAddresses.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 42 })
  street: string;

  @Column()
  number: number;

  @Column({ length: 42 })
  complement: string;

  @Column({ length: 42 })
  district: string;

  @Column()
  zip_code: number;

  @Column({ length: 42 })
  city: string;

  @Column({ length: 2 })
  state: string;
}

export default Address;
