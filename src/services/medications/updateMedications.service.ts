import { AppDataSource } from "../../data-source";
import Medication from "../../entities/medications.entity";
import { AppError } from "../../error";
import { IMedicationUpdate } from "../../interfaces/medicationsInterface";

const medicationUpdateService = async (medicationData:object ,medicationIdForUpdate:string):Promise<IMedicationUpdate | {}> => {
    const mediRepo = AppDataSource.getRepository(Medication)
    const medicationFound = await mediRepo.findOneBy({id:medicationIdForUpdate})

    if(!medicationFound){
        throw new AppError(401, "Medication not found")
    }
    
    const medicationUpdated = mediRepo.create({...medicationFound, ...medicationData})

    await mediRepo.save(medicationUpdated)
    return medicationUpdated
}
export {medicationUpdateService};