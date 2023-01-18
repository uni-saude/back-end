import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patientsEntity";
import { AppError } from "../../error";
import { IPatient, IPatientUpdate } from "../../interfaces/patientsInterface";
import { patientDataWhiteoutSchema } from "../../schemas/patients";

const patientsUpdateService = async (
  patientData: IPatientUpdate,
  patientId: string
): Promise<IPatient> => {
  const patientRepo = AppDataSource.getRepository(Patient);
  const foundPatient = await patientRepo.findOneBy({ id: patientId });

  const updatedPatient = patientRepo.create({
    ...foundPatient,
    ...patientData,
  });
  await patientRepo.save(updatedPatient);

  const patientTrated = patientDataWhiteoutSchema.validate(updatedPatient, {
    stripUnknown: true,
  });
  return patientTrated;
};
export { patientsUpdateService };
