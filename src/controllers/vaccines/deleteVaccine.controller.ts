import { Request, Response } from "express-serve-static-core";
import deleteVaccineService from "../../services/vaccines/deleteVaccine.service";

const deleteVaccineController = async (req: Request, res: Response) => {
  const vaccineId = req.params.id;
  await deleteVaccineService(vaccineId);
  return res.status(204).json();
};

export default deleteVaccineController;
