import { Request, Response } from "express";
import { tutorUpdateService } from "../../services/tutors/updateTutor.service";

const tutorUpdateController = async (req:Request, res:Response) => {
    const tutorId = req.params.id
    const tutorData = req.body
    const updatedTutor = await tutorUpdateService(tutorData,tutorId)
    return res.status(200).json(updatedTutor)
}
export {tutorUpdateController}