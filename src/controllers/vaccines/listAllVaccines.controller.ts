import { Request, Response } from "express-serve-static-core";
import listAllVaccinesService from "../../services/vaccines/listAllVaccines.service";

const listAllVaccinesController = async (req: Request, res: Response) => {
  const idPatient: string = req.patient.id;
  const vaccines = await listAllVaccinesService(idPatient);
  return res.json(vaccines);
};

export default listAllVaccinesController;
