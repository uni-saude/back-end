import { AppDataSource } from "../../data-source";
import Medication from "../../entities/medications.entity";
import { IMedicationRequest } from "../../interfaces/medicationsInterface";

const medicationCreateService = async (medicationData:object):Promise<any> => {
    const mediRepo = AppDataSource.getRepository(Medication)
    const newMedication = mediRepo.create(medicationData)
    await mediRepo.save(newMedication)
    console.log(newMedication);
    
    return newMedication
}
export {medicationCreateService};