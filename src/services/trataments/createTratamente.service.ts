import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";
import Patient from "../../entities/patientsEntity";
import Tratament from "../../entities/trataments.entity";
import { AppError } from "../../error";
import { ITratamentRequest } from "../../interfaces/trataments.interface";
import { tratamentSerializer } from "../../schemas/trataments/trataments.serializer";

const createTratamentService = async (
  idPatient: string,
  idDoctor: string,
  tratamentData: ITratamentRequest
) => {
  const tratamentRepository = AppDataSource.getRepository(Tratament);
  const patientRepository = AppDataSource.getRepository(Patient);
  const doctorRepository = AppDataSource.getRepository(Doctor);

  const patient = await patientRepository.findOneBy({ id: idPatient });

  if (!patient) {
    throw new AppError(404, "Patient not found");
  }

  const doctor = await doctorRepository.findOneBy({ id: idDoctor });

  const createdTratament = tratamentRepository.create(tratamentData);
  createdTratament.patient = patient;
  createdTratament.doctor = doctor;
  await tratamentRepository.save(createdTratament);

  const tratament = await tratamentSerializer.validate(createdTratament, {
    stripUnknown: true,
  });

  return tratament;
};

export default createTratamentService;
