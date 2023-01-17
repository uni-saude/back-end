import { AppDataSource } from "../../data-source";
import Vaccine from "../../entities/vaccines.entity";
import { IVaccinesRequest } from "../../interfaces/vaccines.interface";
import vaccinesSerializer from "../../schemas/vaccines";

const createVaccineService = async (vaccineData: IVaccinesRequest) => {
  const vaccineRepository = AppDataSource.getRepository(Vaccine);

  const createVaccine = vaccineRepository.create(vaccineData);
  await vaccineRepository.save(createVaccine);

  const vaccineReturned = await vaccinesSerializer.validate(createVaccine, {
    stripUnknown: true,
  });

  return vaccineReturned;
};

export default createVaccineService;
