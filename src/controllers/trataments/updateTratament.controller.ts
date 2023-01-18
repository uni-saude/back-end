import { Request, Response } from "express";
import updateTratamentService from "../../services/trataments/updateTratament.service";

const updateTratamentController = async (req: Request, res: Response) => {
  const tratamentId: string = req.params.id;
  const updateTratament = await updateTratamentService(req.body, tratamentId);
  return res.json(updateTratament);
};

export default updateTratamentController;
