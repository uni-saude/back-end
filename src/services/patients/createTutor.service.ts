import Tutor from "../../entities/tutors.entity"
import { AppDataSource } from "../../data-source"
import { ITutor, ITutorRequest } from "../../interfaces/tutorsInterface"

import { AppError } from "../../error"
import { tutorDataWhiteoutSchema } from "../../schemas/patients"

const createTutorService = async (tutorData:ITutorRequest):Promise<ITutor> => {
    const tutorRepo = AppDataSource.getRepository(Tutor)
    const findTutor = await tutorRepo.findOneBy({cpf:tutorData.cpf})
    
    if(findTutor){
        throw new AppError(409, "cpf is already cadastred")
    }

    const newTutor = tutorRepo.create(tutorData)
    await tutorRepo.save(newTutor)
    
    const tutorWhiteout = tutorDataWhiteoutSchema.validate(newTutor, {stripUnknown:true})
    return tutorWhiteout
}
export {createTutorService}