import { Request, Response } from "express";
import { createTutorService } from "../../services/tutors/createTutor.service";
import { ITutor } from "../../interfaces/tutorsInterface";

const TutorCreateController = async (req:Request, res:Response) => {
    const tutorData = req.body
    const newTutor:ITutor = await createTutorService(tutorData)
    return res.status(201).json(newTutor)
}
export {TutorCreateController}