import { AppDataSource } from "../../data-source";
import { IPatient, IPatientExpressRequest } from "../../interfaces/patientsInterface";
import { patientDataWhiteout } from "../../schemas/patients";
import { AppError } from "../../error";
import Tutor from "../../entities/tutors.entity";
import Patient from "../../entities/patientsEntity";

const patientsCreateService = async (patientData:IPatientExpressRequest):Promise<IPatient> => {
    const { age, father, mother, tutorId, email, cpf } = patientData
    const tutorRepo = AppDataSource.getRepository(Tutor)
    const valitedTutor = tutorRepo.findOneBy({id:tutorId})

    if(!valitedTutor){
        throw new AppError(404, "Tutor is not registred")
    }
    if(age < 18 && father.length === 0 && mother.length === 0){
        throw new AppError(401, "patient is a minor and has not registered guardians")
    }

    const patientRepo = AppDataSource.getRepository(Patient)
    const findPatient = await patientRepo.findOneBy({email:email, cpf:cpf})
    
    if(findPatient){
        throw new AppError(400, "Patient is alredy exist")
    }

    const newPatient = patientRepo.create(patientData)

    await patientRepo.save(newPatient)
    const patientTrated = patientDataWhiteout.validate(newPatient, {stripUnknown:true})
    return patientTrated
}
export {patientsCreateService};