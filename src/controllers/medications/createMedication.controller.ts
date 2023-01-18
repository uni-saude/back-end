import { Request, Response } from "express";
import { medicationCreateService } from "../../services/medications/createMedication.service";

const medicationCreateController = async (
  req: Request,
  res: Response
): Promise<Object> => {
  const idPatient: string = req.params.id;
  const medicationBody = req.body;
  const newMedication = await medicationCreateService(
    medicationBody,
    idPatient
  );
  return res.status(201).json(newMedication);
};
export { medicationCreateController };
