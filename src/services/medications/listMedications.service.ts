import { AppDataSource } from "../../data-source";
import Medication from "../../entities/medications.entity";
import { IMedicationsList } from "../../interfaces/medicationsInterface";

const medicationListService = async (
  idPatient: string
): Promise<IMedicationsList | {}> => {
  const mediRepo = AppDataSource.getRepository(Medication);
  const mediQueryBuilder = mediRepo.createQueryBuilder("m");
  const listMedications = await mediQueryBuilder
    .leftJoin("m.patient", "p")
    .where("p.id = :idPatient", { idPatient })
    .getMany();
  return listMedications;
};
export { medicationListService };
