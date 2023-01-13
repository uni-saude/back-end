import { Request, Response } from "express";
import { patientsSessionService } from "../../services/patients/sessionPatient.controller";

const patientsSessionController = async (req:Request, res:Response) => {
    const patientData = req.body
    const token = await patientsSessionService(patientData)
    return res.status(200).json(token)
}
export {patientsSessionController};