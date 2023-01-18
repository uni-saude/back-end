import { Request, Response } from "express";
import listPatientByIdService from "../../services/patients/listPatientById.service";

const listPatientByIdController = async (req: Request, res: Response) => {
  const patientId = req.params.id;
  const patient = await listPatientByIdService(patientId);
  return res.json(patient);
};

export default listPatientByIdController;
