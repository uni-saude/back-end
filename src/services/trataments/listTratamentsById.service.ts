import { AppDataSource } from "../../data-source";
import Tratament from "../../entities/trataments.entity";
import { AppError } from "../../error";

const listTratamentByIdService = async (tratamentId: string) => {
  const tratament = await AppDataSource.createQueryBuilder()
    .select("tratament")
    .from(Tratament, "tratament")
    .where("tratament.id = :id_do_tratamento", {
      id_do_tratamento: tratamentId,
    })
    .getOne();

  if (!tratament) {
    throw new AppError(404, "Tratament not exists");
  }

  return tratament;
};

export default listTratamentByIdService;
