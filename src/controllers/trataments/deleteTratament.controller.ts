import { Request, Response } from "express";
import deleteTratamentService from "../../services/trataments/deleteTratament.service";

const deleteTratamentController = async (req: Request, res: Response) => {
  console.log("aqui");
  const tratamentId = req.params.id;
  await deleteTratamentService(tratamentId);
  return res.status(204).json();
};

export default deleteTratamentController;
