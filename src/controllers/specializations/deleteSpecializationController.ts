import { Request, Response } from "express";
import { deleteSpecializationService } from "../../services/specializations/deleteSpecialization.service";

export const deleteSpecializationController = async (
  req: Request,
  res: Response
) => {
  const idSpecialization: string = req.params.id;
  await deleteSpecializationService(idSpecialization);

  return res.status(204).json({});
};
