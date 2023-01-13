import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Address from "./addresses.entity";
import Patient from "./patientsEntity";

@Entity("patients_addresses")
class PatientToAddress {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Patient, (patient) => patient.address)
  patient: Patient;

  @ManyToOne(() => Address)
  address: Address;
}

export default PatientToAddress;
