import { Request, Response } from "express";
import listAllTratamentService from "../../services/trataments/listAllTrataments.service";

const listAllTratamentControllers = async (req: Request, res: Response) => {
  const idPatient: string = req.patient.id;
  const trataments = await listAllTratamentService(idPatient);
  return res.json(trataments);
};

export default listAllTratamentControllers;
