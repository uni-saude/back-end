import { Request } from "express";
import { AppDataSource } from "../../data-source";
import { IPatient, IPatientExpressRequest } from "../../interfaces/patientsInterface";
import { patientDataWhiteout } from "../../schemas/patients";
import { AppError } from "../../error";
import { Patients } from "../../entities/patientEntity";

const patientsCreateService = async (patientData:IPatientExpressRequest):Promise<IPatient> => {
    const { age, father, mother, tutorId } = patientData
    const tutorRepo = AppDataSource.getRepository(Patients) // COLOCAR A ENTIDADE CERTA "tutors_patients"
    const valitedTutor = tutorRepo.findOneBy({id:tutorId})

    if(!valitedTutor){
        throw new AppError(404, "Tutor is not registred")
    }
    if(age < 18 && father.length === 0 && mother.length === 0){
        throw new AppError(401, "patient is a minor and has not registered guardians")
    }

    const patientRepo = AppDataSource.getRepository(Patients) // COLOCAR A ENTIDADE CERTA "patients"
    const newPatient = patientRepo.create(patientData)

    await patientRepo.save(newPatient)
    const patientTrated = patientDataWhiteout.validate(newPatient)
    return patientTrated
}
export {patientsCreateService};