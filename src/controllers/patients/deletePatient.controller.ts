import { Request, Response } from "express";
import { patientsDeleteService } from "../../services/patients/deletePatient.service";

const patientsDeleteController = async (req:Request, res:Response) => {
    const patientId = req.params.id
    const patientIdOwner = req.body.user.id
    const patientDeleted = await patientsDeleteService(patientId, patientIdOwner)
    return res.status(200).json()
}
export {patientsDeleteController};