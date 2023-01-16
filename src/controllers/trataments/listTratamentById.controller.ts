import { Request, Response } from "express";
import listTratamentByIdService from "../../services/trataments/listTratamentsById.service";

const listTratamentByIdController = async (req: Request, res: Response) => {
  const tratamentId = req.params.id;
  const tratament = await listTratamentByIdService(tratamentId);
  return res.json(tratament);
};

export default listTratamentByIdController;
