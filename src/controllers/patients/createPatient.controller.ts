import { Request, Response } from "express";
import { patientsCreateService } from "../../services/patients/createPatient.service";

const patientsCreateController = async (req: Request, res: Response) => {
  const patientData = req.body;
  const addressData = req.body.address
  const createdPatient = await patientsCreateService(patientData, addressData);
  return res.status(201).json(createdPatient);
};
export { patientsCreateController };
