import { Request, Response } from "express";
import { patientsCreateService } from "../../services/patients/createPatient.service";
import { IPatient, IPatientExpressRequest } from "../../interfaces/patientsInterface";

const patientsCreateController = async (req:Request, res:Response) => {
    const patientData = req.body;
    const createdPatient = await patientsCreateService(patientData);
    return res.status(201).json(createdPatient)
}
export {patientsCreateController};