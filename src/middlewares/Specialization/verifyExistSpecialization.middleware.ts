import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import Specialization from "../../entities/specialization.entity";
import { AppError } from "../../error";

export const verifyExistSpecializationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idSpecialization: string = req.params.id;

  const specializationsRepository = AppDataSource.getRepository(Specialization);

  const existSpecialization: boolean = await specializationsRepository.exist({
    where: { id: idSpecialization },
  });

  if (!existSpecialization) {
    throw new AppError(404, "Specialization not found");
  }

  return next();
};
