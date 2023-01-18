import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";

const listAllDoctorsService = async () => {
  const doctorsRepository = AppDataSource.getRepository(Doctor);

  const doctors = await doctorsRepository.find();

  return doctors;
};

export default listAllDoctorsService;
