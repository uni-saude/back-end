import { Request, Response } from "express";
import { ITratamentRequest } from "../../interfaces/trataments.interface";
import updateTratamentService from "../../services/trataments/updateTratament.service";

const updateTratamentController = async (req: Request, res: Response) => {
  const tratamentData: ITratamentRequest = req.body;
  const tratamentId = req.params.id;
  const updateTratament = await updateTratamentService(
    tratamentData,
    tratamentId
  );
  return res.json(updateTratament);
};

export default updateTratamentController;
