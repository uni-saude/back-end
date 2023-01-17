import { Request, Response } from "express-serve-static-core";
import { IVaccinesRequest } from "../../interfaces/vaccines.interface";
import updateVaccineService from "../../services/vaccines/updateVaccine.service";

const updateVaccineController = async (req: Request, res: Response) => {
  const vaccineData: IVaccinesRequest = req.body;
  const vaccineId = req.params.id;
  const updateVaccine = await updateVaccineService(vaccineData, vaccineId);
  return res.json(updateVaccine);
};

export default updateVaccineController;
