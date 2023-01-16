import { Request, Response } from "express";
import { patientsUpdateService } from "../../services/patients/updatePatients.service";

const patientsUpdateController = async (req:Request, res:Response) => {
    const patiendId = req.params.id
    const patientData = req.body
    const patientOwnerId = req.body.user.id
    const updatedPatient = await patientsUpdateService(patientData,patiendId,patientOwnerId)
    return res.status(200).json(updatedPatient)
}
export {patientsUpdateController};