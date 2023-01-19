import { AppDataSource } from "../../data-source";
import Hospital from "../../entities/hospitals.entity";
import { AppError } from "../../error";

const findHospitalService = async (hospitalId: string) => {
  const hospitalsRep = AppDataSource.getRepository(Hospital);
  const hospitalBuilder = hospitalsRep.createQueryBuilder("hospitals");

  const foundHospital = await hospitalsRep.findOneBy({ id: hospitalId });

  if (!foundHospital) {
    throw new AppError(404, "hospital not found");
  }

  const hospital = await hospitalBuilder
    .leftJoinAndSelect("hospitals.address", "addresses")
    .where("hospitals.id = :id", { id: hospitalId })
    .getOne();

  return hospital;
};

export { findHospitalService };
