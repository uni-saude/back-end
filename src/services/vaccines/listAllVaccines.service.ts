import { AppDataSource } from "../../data-source";
import Vaccine from "../../entities/vaccines.entity";

const listAllVaccinesService = async (idPatient: string) => {
  const vaccinesRepository = AppDataSource.getRepository(Vaccine);
  const vaccinesQueryBuilder = vaccinesRepository.createQueryBuilder("v");
  console.log("AAAAA", idPatient);

  const vaccines = await vaccinesQueryBuilder
    .leftJoin("v.patient", "p")
    .where("p.id = :idPatient", { idPatient })
    .getMany();

  return vaccines;
};

export default listAllVaccinesService;
