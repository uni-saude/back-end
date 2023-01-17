import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";
import Exam from "../../entities/exams.entity";
import Patient from "../../entities/patientsEntity";
import { AppError } from "../../error";
import { ICreateExamRequest } from "../../interfaces/examsInterface";
import { createExamResponseSchema } from "../../schemas/exams";

export const createExamService = async (
  idDoctor: string,
  idPatient: string,
  dataExam: ICreateExamRequest
) => {
  const examsRepository = AppDataSource.getRepository(Exam);
  const doctorsRepository = AppDataSource.getRepository(Doctor);
  const patientRepository = AppDataSource.getRepository(Patient);

  const foundPatient = await patientRepository.findOneBy({ id: idPatient });

  if (!foundPatient) {
    throw new AppError(404, "Patient not found");
  }

  const doctor = await doctorsRepository.findOneBy({ id: idDoctor });

  const newExam = examsRepository.create(dataExam);
  newExam.doctor = doctor;
  newExam.patient = foundPatient;
  await examsRepository.save(newExam);

  return await createExamResponseSchema.validate(newExam, {
    stripUnknown: true,
  });
};
