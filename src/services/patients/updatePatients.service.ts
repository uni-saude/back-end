import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patientsEntity";
import { AppError } from "../../error";
import { IPatient, IPatientUpdate } from "../../interfaces/patientsInterface";
import { patientDataWhiteout } from "../../schemas/patients";

const patientsUpdateService = async (patientData:IPatientUpdate, patientId:string, patientOwnerId:string):Promise<IPatient> => {
    const patientRepo = AppDataSource.getRepository(Patient)
    const foundPatient = await patientRepo.findOneBy({id:patientId})
    const foundOwnerPatient = await patientRepo.findOneBy({id:patientOwnerId})

    if(foundOwnerPatient !== foundPatient){
        throw new AppError(401, "Não é permitido atualizar outras contas")
    }
    
    const updatedPatient = patientRepo.create({...foundPatient, ...patientData})
    await patientRepo.save(updatedPatient)

    const patientTrated = patientDataWhiteout.validate(updatedPatient, {stripUnknown:true})
    return patientTrated
}
export {patientsUpdateService};