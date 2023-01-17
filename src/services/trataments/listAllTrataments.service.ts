import { AppDataSource } from "../../data-source";
import Tratament from "../../entities/trataments.entity";

const listAllTratamentService = async (): Promise<Tratament[]> => {
  const tratamentsrepository = AppDataSource.getRepository(Tratament);

  const trataments = await tratamentsrepository.find();

  return trataments;
};

export default listAllTratamentService;
