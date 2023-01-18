import { Request, Response } from "express";
import { findHospitalService } from "../../services/hospitals/findHospital.service";

const findHospitalController = async (req: Request, res: Response) => {
  const data = await findHospitalService(req.params.id);
  return res.status(200).json(data);
};

export { findHospitalController };
