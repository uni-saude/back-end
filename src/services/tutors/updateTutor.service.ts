import { Request } from "express"
import { AppDataSource } from "../../data-source"
import Tutor from "../../entities/tutors.entity"
import { AppError } from "../../error"

const tutorUpdateService = async (tutorData:object ,tutorId:string) => {
    const tutorRepo = AppDataSource.getRepository(Tutor)
    const foundTutor = await tutorRepo.findOneBy({id:tutorId})
   
    // Verificação para validar se o tutorOwner é o mesmo do params.id
    // const foundOwnerTutor = await tutorRepo.findOneBy({id:tutorOwnerId})    
    // if(foundOwnerTutor !== foundTutor){
    //     throw new AppError(401, "Don't permission update outhers accounts")
    // }

    const updateTutor = tutorRepo.create({...foundTutor, ...tutorData})
    await tutorRepo.save(updateTutor)

    return updateTutor
}
export {tutorUpdateService};