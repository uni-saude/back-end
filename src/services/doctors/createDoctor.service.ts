import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";
import Specialization from "../../entities/specialization.entity";
import { AppError } from "../../error";
import {
  ICreateDoctor,
  IDoctorResponse,
} from "../../interfaces/doctorsInterface";
import { doctorResponseSchema } from "../../schemas/doctors";

export const createDoctorService = async (
  dataDoctor: ICreateDoctor
): Promise<IDoctorResponse> => {
  const doctorsRepository = AppDataSource.getRepository(Doctor);
  const specializationRepositpry = AppDataSource.getRepository(Specialization);

  const existCrm: boolean = await doctorsRepository.exist({
    where: { crm: dataDoctor.crm },
  });

  if (existCrm) {
    throw new AppError(409, "Crm already registered");
  }

  const existEmail: boolean = await doctorsRepository.exist({
    where: {email: dataDoctor.email}
  })

  if (existEmail) {
    throw new AppError(409, "Email already registered")
  }

  const foundSpecialization: Specialization =
    await specializationRepositpry.findOneBy({
      id: dataDoctor.specializationId,
    });

  if (!foundSpecialization) {
    throw new AppError(404, "Specialization not found");
  }

  const newDoctor: Doctor = doctorsRepository.create(dataDoctor);
  newDoctor.specialization = foundSpecialization;
  await doctorsRepository.save(newDoctor);

  return await doctorResponseSchema.validate(newDoctor, {
    stripUnknown: true,
  });
};
