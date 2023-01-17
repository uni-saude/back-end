import { Request, Response } from "express-serve-static-core";
import listAllVaccinesService from "../../services/vaccines/listAllVaccines.service";

const listAllVaccinesController = async (req: Request, res: Response) => {
  const vaccines = await listAllVaccinesService();
  return res.json(vaccines);
};

export default listAllVaccinesController;
