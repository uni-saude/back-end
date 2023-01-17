import { AppDataSource } from "../../data-source"
import Medication from "../../entities/medications.entity"
import { IMedicationsList } from "../../interfaces/medicationsInterface"

const medicationListService = async ():Promise<IMedicationsList | {}> => {
    const mediRepo = AppDataSource.getRepository(Medication)
    const listMedications = await mediRepo.find()    
    return listMedications
}
export {medicationListService}