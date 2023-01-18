import { Request, Response } from "express";
import { patientsUpdateService } from "../../services/patients/updatePatients.service";

const patientsUpdateController = async (req: Request, res: Response) => {
  const patiendId = req.patient.id;
  const patientData = req.body;

  const updatedPatient = await patientsUpdateService(patientData, patiendId);
  return res.status(200).json(updatedPatient);
};
export { patientsUpdateController };
