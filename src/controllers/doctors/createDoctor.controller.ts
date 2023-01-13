import { Request, Response } from "express";
import { createDoctorService } from "../../services/doctors/createDoctor.service";
import { loginDoctorService } from "../../services/doctors/loginDoctor.service";

export const createDoctorController = async (req: Request, res: Response) => {
  const newDoctor = await createDoctorService(req.body);
  return res.status(201).json(newDoctor);
};

export const loginDoctorController = async (req: Request, res: Response) => {
  const dataDoctor = await loginDoctorService(req.body);
  return res.status(200).json(dataDoctor);
};
