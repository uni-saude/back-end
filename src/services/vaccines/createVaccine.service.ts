import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patientsEntity";
import Vaccine from "../../entities/vaccines.entity";
import { IVaccinesRequest } from "../../interfaces/vaccines.interface";
import vaccinesSerializer from "../../schemas/vaccines";

const createVaccineService = async (
  vaccineData: IVaccinesRequest,
  idPatient: string
) => {
  const vaccineRepository = AppDataSource.getRepository(Vaccine);
  const patientRepository = AppDataSource.getRepository(Patient);

  const patient = await patientRepository.findOneBy({ id: idPatient });
  console.log(patient);

  const createVaccine = vaccineRepository.create(vaccineData);
  createVaccine.patient = patient;
  await vaccineRepository.save(createVaccine);

  const vaccineReturned = await vaccinesSerializer.validate(createVaccine, {
    stripUnknown: true,
  });

  return vaccineReturned;
};

export default createVaccineService;
