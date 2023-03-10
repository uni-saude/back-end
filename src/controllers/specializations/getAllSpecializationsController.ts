import { Request, Response } from "express";
import { getAllSpecializationsService } from "../../services/specializations/getAllSpecializations.service";

export const getAllSpecializationsController = async (
  req: Request,
  res: Response
) => {
  const allSpecializations = await getAllSpecializationsService();
  return res.status(200).json(allSpecializations);
};
