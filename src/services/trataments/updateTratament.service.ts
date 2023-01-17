import { AppDataSource } from "../../data-source";
import Tratament from "../../entities/trataments.entity";
import { ITratamentRequest } from "../../interfaces/trataments.interface";

const updateTratamentService = async (
  tratamentData: ITratamentRequest,
  tratamentId: string
) => {
  const tratamentRepository = AppDataSource.getRepository(Tratament);

  const findTratament = await tratamentRepository.findOneBy({
    id: tratamentId,
  });

  const updateTratament = tratamentRepository.create({
    ...findTratament,
    ...tratamentData,
  });

  await tratamentRepository.save(updateTratament);

  return updateTratament;
};

export default updateTratamentService;
