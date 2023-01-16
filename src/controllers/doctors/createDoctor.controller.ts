import { Request, Response } from "express";
import { createDoctorService } from "../../services/doctors/createDoctor.service";

export const createDoctorController = async (req: Request, res: Response) => {
  const newDoctor = await createDoctorService(req.body);
  return res.status(201).json(newDoctor);
};
