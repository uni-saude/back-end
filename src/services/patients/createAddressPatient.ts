import { AppDataSource } from "../../data-source";
import Address from "../../entities/addresses.entity";
import { AppError } from "../../error";
import { IAddress } from "../../interfaces/addressesInterface";

const createAddressPatientService = async (addressData):Promise<IAddress[]> => {    
    const addressRepo = AppDataSource.getRepository(Address)
    
    //COMO VERIFICAR SE O ENDEREÇO NÃO É DUPLICADO
    // const addressExist = await addressRepo.exist(addressData)
    // if(addressExist){
    //     throw new AppError(409, "address is alread cadastred")
    // }

    const newAddress = addressRepo.create(addressData)
    await addressRepo.save(newAddress)

    return newAddress
}
export {createAddressPatientService};