import { Request, Response } from "express-serve-static-core";
import listVaccinesByIdService from "../../services/vaccines/listVaccinesById.service";

const listVaccinesByIdController = async (req: Request, res: Response) => {
  const vaccineId: string = req.params.id;
  const vaccine = await listVaccinesByIdService(vaccineId);
  return res.json(vaccine);
};

export default listVaccinesByIdController;
