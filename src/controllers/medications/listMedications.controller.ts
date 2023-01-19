import { Request, Response } from "express";
import { medicationListService } from "../../services/medications/listMedications.service";
import { IMedicationsList } from "../../interfaces/medicationsInterface";

const medicationListController = async (
  req: Request,
  res: Response
): Promise<IMedicationsList | {}> => {
  const idPatient: string = req.params.id;
  const listMedication = await medicationListService(idPatient);
  return res.status(200).json(listMedication);
};
export { medicationListController };
