import { AppDataSource } from "../../data-source";
import Tratament from "../../entities/trataments.entity";
import { ITratamentRequest } from "../../interfaces/trataments.interface";
import { tratamentSerializer } from "../../schemas/trataments/trataments.serializer";

const createTratamentService = async (tratamentData: ITratamentRequest) => {
  const tratamentRepository = AppDataSource.getRepository(Tratament);

  const createdTratament = tratamentRepository.create(tratamentData);
  await tratamentRepository.save(createdTratament);

  const tratament = await tratamentSerializer.validate(createdTratament, {
    stripUnknown: true,
  });

  return tratament;
};

export default createTratamentService;
