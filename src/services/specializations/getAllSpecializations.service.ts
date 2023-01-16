import { AppDataSource } from "../../data-source";
import Specialization from "../../entities/specialization.entity";

export const getAllSpecializationsService = async () => {
  const specializationsRepository = AppDataSource.getRepository(Specialization);

  return await specializationsRepository.find();
};
