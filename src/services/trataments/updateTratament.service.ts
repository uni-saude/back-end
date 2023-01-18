import { AppDataSource } from "../../data-source";
import Tratament from "../../entities/trataments.entity";
import { AppError } from "../../error";
import { ITratamentUpdateRequest } from "../../interfaces/trataments.interface";

const updateTratamentService = async (
  tratamentData: ITratamentUpdateRequest,
  tratamentId: string
) => {
  const tratamentRepository = AppDataSource.getRepository(Tratament);

  const findTratament = await tratamentRepository.findOneBy({
    id: tratamentId,
  });

  if (!findTratament) throw new AppError(404, "Tratament not found")

  const updateTratament = tratamentRepository.create({
    ...findTratament,
    ...tratamentData,
  });

  await tratamentRepository.save(updateTratament);

  return updateTratament;
};

export default updateTratamentService;
