import Tutor from "../../entities/tutors.entity"
import { AppDataSource } from "../../data-source"
import { ITutor, ITutorRequest } from "../../interfaces/tutorsInterface"
import { tutorDataWhiteoutSerializer } from "../../schemas/patients"
import { AppError } from "../../error"

const createTutorService = async (tutorData:ITutorRequest):Promise<ITutor> => {
    const tutorRepo = AppDataSource.getRepository(Tutor)
    const findTutor = await tutorRepo.findOneBy({cpf:tutorData.cpf})
    
    if(findTutor){
        throw new AppError(409, "cpf is already cadastred")
    }

    const newTutor = tutorRepo.create(tutorData)
    await tutorRepo.save(newTutor)
    
    const tutorWhiteout = tutorDataWhiteoutSerializer.validate(newTutor, {stripUnknown:true})
    return tutorWhiteout
}
export {createTutorService}