import { Request, Response } from "express-serve-static-core";
import { IVaccinesRequest } from "../../interfaces/vaccines.interface";
import createVaccineService from "../../services/vaccines/createVaccine.service";

const createVaccineController = async (req: Request, res: Response) => {
  const vaccineData: IVaccinesRequest = req.body;
  const newVaccine = await createVaccineService(vaccineData);
  return res.status(201).json(newVaccine);
};

export default createVaccineController;
