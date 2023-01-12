import { AppDataSource } from "../../data-source"
import { Patients } from "../../entities/patientEntity"
import { ITutor } from "../../interfaces/tutorsInterface"
import { tutorDataWhiteoutSerializer } from "../../schemas/patients"

const createTutorService = async (tutorData):Promise<ITutor> => {
    const tutorRepo = AppDataSource.getRepository(Patients) // COLOCAR ENTIDADE CORRETA "tutors_patients"
    
    const newTutor = tutorRepo.create(tutorData)
    await tutorRepo.save(newTutor)
    
    const tutorWhiteout = tutorDataWhiteoutSerializer.validate(newTutor)
    return tutorWhiteout
}
export {createTutorService}