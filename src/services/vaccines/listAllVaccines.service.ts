import { AppDataSource } from "../../data-source";
import Vaccine from "../../entities/vaccines.entity";

const listAllVaccinesService = async () => {
  const vaccinesRepository = AppDataSource.getRepository(Vaccine);

  const vaccines = await vaccinesRepository.find();

  return vaccines;
};

export default listAllVaccinesService;
