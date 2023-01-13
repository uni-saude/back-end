import { AppDataSource } from "../../data-source";
import Address from "../../entities/addresses.entity";

const listAddressByIdService = async (addressId: string) => {
  const address = await AppDataSource.createQueryBuilder()
    .select("address")
    .from(Address, "address")
    .where("address.id = :id_address", { id_address: addressId })
    .getOne();

  return address;
};

export default listAddressByIdService;
