import { AppDataSource } from "../../data-source";
import Tratament from "../../entities/trataments.entity";

const listAllTratamentService = async (
  idPatient: string
): Promise<Tratament[]> => {
  const tratamentsrepository = AppDataSource.getRepository(Tratament);
  const tratamentsQueryBuilder = tratamentsrepository.createQueryBuilder("t");

  console.log(idPatient);

  const trataments = await tratamentsQueryBuilder
    .where("t.patientId = :idPatient", { idPatient })
    .getMany();

  return trataments;
};

export default listAllTratamentService;
