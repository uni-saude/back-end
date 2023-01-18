import { AppDataSource } from "../../data-source";
import Address from "../../entities/addresses.entity";
import Hospital from "../../entities/hospitals.entity";
import { AppError } from "../../error";
import { IHospital } from "../../interfaces/hospitalsIterface";

const createHospitalService = async (payload: IHospital) => {
  const hospitalsRep = AppDataSource.getRepository(Hospital);
  const addressRep = AppDataSource.getRepository(Address);
  const address = payload.address;

  const hospitalExists = await hospitalsRep.findOneBy({ name: payload.name });

  if (hospitalExists) {
    throw new AppError(400, "hospital is already registered!");
  }

  const addressExists = await addressRep.findOneBy({
    zip_code: address.zip_code,
  });

  if (addressExists) {
    throw new AppError(400, "address is already registered!");
  }

  const newAddress = addressRep.create(address);

  await addressRep.save(newAddress);

  const newHospital = hospitalsRep.create({
    name: payload.name,
    address: { ...newAddress },
  });

  await hospitalsRep.save(newHospital);

  const serviceResponse = { ...newHospital, address: { ...address } };

  return serviceResponse;
};

export { createHospitalService };
