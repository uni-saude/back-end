import { AppDataSource } from "../../data-source";
import Vaccine from "../../entities/vaccines.entity";

const listVaccinesByIdService = async (vaccineId: string) => {
  const vaccine = await AppDataSource.createQueryBuilder()
    .select("vaccines")
    .from(Vaccine, "vaccines")
    .where("vaccines.id = :id_da_vacina", { id_da_vacina: vaccineId })
    .getOne();

  return vaccine;
};

export default listVaccinesByIdService;
