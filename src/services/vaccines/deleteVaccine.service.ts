import { AppDataSource } from "../../data-source";
import Vaccine from "../../entities/vaccines.entity";
import { AppError } from "../../error";

const deleteVaccineService = async (vaccineId: string) => {
  const vaccineRepository = AppDataSource.getRepository(Vaccine);

  const vaccine = await vaccineRepository.findOneBy({
    id: vaccineId,
  });

  if (!vaccine) {
    throw new AppError(404, "Vaccine not found");
  }

  await vaccineRepository.delete({ id: vaccine.id });

  return;
};

export default deleteVaccineService;
