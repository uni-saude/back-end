import { AppDataSource } from "../../data-source";
import Address from "../../entities/addresses.entity";
import { IAddressRequest } from "../../interfaces/addressesInterface";

const updateAddressService = async (
  addressData: IAddressRequest,
  addressId: string
) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const address = await addressRepository.findOneBy({
    id: addressId,
  });

  const updateAddress = addressRepository.create({
    ...address,
    ...addressData,
  });

  await addressRepository.save(updateAddress);

  return updateAddress;
};

export default updateAddressService;
