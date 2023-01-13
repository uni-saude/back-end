import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";
import Specialization from "../../entities/specialization.entity";
import { AppError } from "../../error";
import { ICreateDoctor } from "../../interfaces/doctorsInterface";
import { doctorResponseSchema } from "../../schemas/doctors";

export const createDoctorService = async (dataDoctor: ICreateDoctor) => {
  const doctorsRepository = AppDataSource.getRepository(Doctor);
  const specializationRepositpry = AppDataSource.getRepository(Specialization);

  const foundSpecialization = await specializationRepositpry.findOneBy({
    id: dataDoctor.specializationId,
  });

  if (!foundSpecialization) {
    throw new AppError(404, "Specialization not found");
  }

  const newDoctor = doctorsRepository.create(dataDoctor);
  newDoctor.specialization = foundSpecialization;
  await doctorsRepository.save(newDoctor);

  return await doctorResponseSchema.validate(newDoctor, {
    stripUnknown: true,
  });
};
