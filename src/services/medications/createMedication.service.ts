import Medication from "../../entities/medications.entity";
import { AppDataSource } from "../../data-source";
import { IMedication } from "../../interfaces/medicationsInterface";

const medicationCreateService = async (medicationData:object):Promise<IMedication | {}> => {
    const mediRepo = AppDataSource.getRepository(Medication)
    const newMedication = mediRepo.create(medicationData)
    await mediRepo.save(newMedication)
    
    return newMedication
}
export {medicationCreateService};