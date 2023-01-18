import { Request, Response } from "express";
import { createHospitalService } from "../../services/hospitals/createHospital.service";

const createHospitalController = async (req: Request, res: Response) => {
  const data = await createHospitalService(req.body);

  return res.status(201).json(data);
};

export { createHospitalController };
