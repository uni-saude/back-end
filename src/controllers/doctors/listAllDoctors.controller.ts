import { Request, Response } from "express";
import listAllDoctorsService from "../../services/doctors/listAllDoctors.service";

const listAllDoctorsController = async (req: Request, res: Response) => {
  const doctors = await listAllDoctorsService();
  return res.json(doctors);
};

export default listAllDoctorsController;
