import { AppDataSource } from "../../data-source";
import Hospital from "../../entities/hospitals.entity";

const listHospitalService = async () => {
  const hospitalsRep = AppDataSource.getRepository(Hospital);
  const hospitalBuilder = hospitalsRep.createQueryBuilder("hospitals");

  const hospitals = await hospitalBuilder
    .leftJoinAndSelect("hospitals.address", "addresses")
    .getMany();

  return hospitals;
};

export { listHospitalService };
