import { Request, Response } from "express";
import { tutorUpdateService } from "../../services/patients/updateTutor.service";

const tutorUpdateController = async (req:Request, res:Response) => {
    const tutorId = req.params.id
    const tutorData = req.body
    const tutorOwnerId = req.body.user.id
    const updatedTutor = await tutorUpdateService(tutorData,tutorId,tutorOwnerId)
    return res.status(200).json(updatedTutor)
}
export {tutorUpdateController}