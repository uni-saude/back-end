import { AppDataSource } from "../../data-source";
import Hospital from "../../entities/hospitals.entity";
import { AppError } from "../../error";

const deleteHospitalService = async (hospitalId: string) => {
  const hospitalsRep = AppDataSource.getRepository(Hospital);

  const hospital = await hospitalsRep.findOneBy({ id: hospitalId });

  if (!hospital) {
    throw new AppError(404, "hospital not found");
  }

  await hospitalsRep.delete(hospitalId);

  return {};
};

export { deleteHospitalService };
