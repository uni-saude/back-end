import { AppDataSource } from "../../data-source";
import Specialization from "../../entities/specialization.entity";
import { AppError } from "../../error";
import { ICreateSpecializationRequest } from "../../interfaces/specializationsInterface";

export const createSpecializationService = async (
  specialization: ICreateSpecializationRequest
) => {
  const specializationQueryBuilder =
    AppDataSource.getRepository(Specialization).createQueryBuilder();

  const specializationExist = await specializationQueryBuilder
    .where("name ILIKE :name", { name: specialization.name })
    .getOne();

  if (specializationExist) {
    throw new AppError(409, "Specialization already registered");
  }

  return await specializationQueryBuilder
    .insert()
    .values(specialization)
    .returning("*")
    .execute()
    .then((e) => e.raw[0]);
};
