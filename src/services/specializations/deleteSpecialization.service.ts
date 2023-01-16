import { AppDataSource } from "../../data-source";
import Specialization from "../../entities/specialization.entity";

export const deleteSpecializationService = async (idSpecialization: string) => {
  const specitalizationRepository = AppDataSource.getRepository(Specialization);
  await specitalizationRepository.delete({ id: idSpecialization });
  return {};
};
