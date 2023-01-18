import { AppDataSource } from "../../data-source";
import Tratament from "../../entities/trataments.entity";
import { AppError } from "../../error";

const deleteTratamentService = async (tratamentId: string) => {
  const tratamentRepository = AppDataSource.getRepository(Tratament);

  const tratament = await tratamentRepository.findOneBy({
    id: tratamentId,
  });

  if (!tratament) {
    throw new AppError(404, "Tratament not found!");
  }

  await tratamentRepository.remove(tratament);
};

export default deleteTratamentService;
