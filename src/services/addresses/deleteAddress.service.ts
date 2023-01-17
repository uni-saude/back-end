import { AppDataSource } from "../../data-source";
import Address from "../../entities/addresses.entity";
import { AppError } from "../../error";

const deleteAddressService = async (addressId: string) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const address = await addressRepository.findOneBy({
    id: addressId,
  });

  if (!address) {
    throw new AppError(404, "Address not found!");
  }

  await addressRepository.delete(address);
  await addressRepository.save({
    ...address,
  });
};

export default deleteAddressService;
