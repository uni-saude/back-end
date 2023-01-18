import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patientsEntity";
import { AppError } from "../../error";

const listPatientByIdService = async (patientId: string) => {
  const patient = await AppDataSource.createQueryBuilder()
    .select("patients")
    .from(Patient, "patients")
    .where("patients.id = :id_do_paciente", { id_do_paciente: patientId })
    .getOne();

  if (!patient) {
    throw new AppError(404, "Patient is not exists");
  }

  return patient;
};

export default listPatientByIdService;
