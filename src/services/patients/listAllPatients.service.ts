import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patientsEntity";

const listAllPatientsService = async () => {
  const patientRepository = AppDataSource.getRepository(Patient);

  const patients = await patientRepository.find();

  return patients;
};

export default listAllPatientsService;
