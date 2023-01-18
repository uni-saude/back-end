import { AppDataSource } from "../../data-source"
import Medication from "../../entities/medications.entity"

const medicationDeleteService = async (medicationId:string):Promise<object> => {
    const mediRepo = AppDataSource.getRepository(Medication)
    const deletedMedication = mediRepo.delete({id:medicationId})
    return {}
}
export {medicationDeleteService}