import { Request, Response } from "express";
import { listHospitalService } from "../../services/hospitals/listHospitals.service";

const listHospitalsController = async (req: Request, res: Response) => {
  const data = await listHospitalService();

  return res.status(200).json(data);
};

export { listHospitalsController };
