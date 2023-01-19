import { AppDataSource } from "../../data-source";
import Vaccine from "../../entities/vaccines.entity";
import { IVaccinesRequest } from "../../interfaces/vaccines.interface";
import vaccinesSerializer from "../../schemas/vaccines";

const updateVaccineService = async (
  vaccineData: IVaccinesRequest,
  vaccineId: string
) => {
  const vaccineRepository = AppDataSource.getRepository(Vaccine);

  const findVaccine = await vaccineRepository.findOneBy({
    id: vaccineId,
  });

  const updateVaccine = vaccineRepository.create({
    ...findVaccine,
    ...vaccineData,
  });

  await vaccineRepository.save(updateVaccine);

  const vaccineReturned = await vaccinesSerializer.validate(updateVaccine, {
    stripUnknown: true,
  });

  return vaccineReturned;
};

export default updateVaccineService;
