import { AppDataSource } from "../../data-source";
import Address from "../../entities/addresses.entity";
import Patient from "../../entities/patientsEntity";
import { IAddressRequest } from "../../interfaces/addressesInterface";

const createAddressService = async (addressData: IAddressRequest) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const newAddress = addressRepository.create(addressData);

  await addressRepository.save(newAddress);

  return newAddress;
};

export default createAddressService;
