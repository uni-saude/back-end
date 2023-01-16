import { Request, Response } from "express";
import listAllTratamentService from "../../services/trataments/listAllTrataments.service";

const listAllTratamentControllers = async (req: Request, res: Response) => {
  const trataments = await listAllTratamentService();
  return res.json(trataments);
};

export default listAllTratamentControllers;
