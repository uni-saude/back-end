import { Request, Response } from "express";
import { ITratamentRequest } from "../../interfaces/trataments.interface";
import createTratamentService from "../../services/trataments/createTratamente.service";

const createTratamentController = async (req: Request, res: Response) => {
  const idPatient: string = req.params.id;
  const idDoctor: string = req.doctor.id;
  const tratamentData: ITratamentRequest = req.body;
  const newTratament = await createTratamentService(
    idPatient,
    idDoctor,
    tratamentData
  );
  return res.status(201).json(newTratament);
};

export default createTratamentController;
