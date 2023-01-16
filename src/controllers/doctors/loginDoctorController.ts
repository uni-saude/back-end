import { Request, Response } from "express";
import { loginDoctorService } from "../../services/doctors/loginDoctor.service";

export const loginDoctorController = async (req: Request, res: Response) => {
  const dataDoctor = await loginDoctorService(req.body);
  return res.status(200).json(dataDoctor);
};
