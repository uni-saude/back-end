import { Request, Response } from "express";
import { ISpecialization } from "../../interfaces/specializationsInterface";
import { createSpecializationService } from "../../services/specializations/createSpecialization.service";

export const createSpecializationController = async (
  req: Request,
  res: Response
) => {
  const newSpecialization: ISpecialization = await createSpecializationService(
    req.body
  );
  return res.status(201).json(newSpecialization);
};
