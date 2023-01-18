import { Request, Response } from "express";
import listAllPatientsService from "../../services/patients/listAllPatients.service";

const listAllPatientsController = async (req: Request, res: Response) => {
  const patients = await listAllPatientsService();
  return res.json(patients);
};

export default listAllPatientsController;
