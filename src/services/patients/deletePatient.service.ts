import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patientsEntity";
import { AppError } from "../../error";

const patientsDeleteService = async (
  patientId: string,
  patientIdOwner: string
): Promise<any> => {
  const patientRepo = AppDataSource.getRepository(Patient);
  const findPatient = await patientRepo.findOneBy({ id: patientId });

  if (!findPatient) {
    throw new AppError(400, "Don't exist this pacient");
  }

  // await patientRepo.update(patientIdOwner, {isActive:false})
  const patientDeleted = await patientRepo.delete({ id: patientId });
  return {};
};
export { patientsDeleteService };
