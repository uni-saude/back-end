import Medication from "../../entities/medications.entity";
import { AppDataSource } from "../../data-source";
import { IMedication } from "../../interfaces/medicationsInterface";
import Patient from "../../entities/patientsEntity";
import { AppError } from "../../error";
import { medicationResponseSchema } from "../../schemas/medications";

const medicationCreateService = async (
  medicationData: object,
  idPatient: string
): Promise<IMedication | {}> => {
  const mediRepo = AppDataSource.getRepository(Medication);
  const patientRepo = AppDataSource.getRepository(Patient);

  const patient = await patientRepo.findOneBy({ id: idPatient });

  if (!patient) {
    throw new AppError(404, "Patient not found");
  }

  const newMedication = mediRepo.create(medicationData);
  newMedication.patient = patient;

  await mediRepo.save(newMedication);

  return await medicationResponseSchema.validate(newMedication, {
    stripUnknown: true,
  });
};
export { medicationCreateService };
