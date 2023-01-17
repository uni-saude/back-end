import { Request, Response } from "express";
import { ICreateExamRequest } from "../../interfaces/examsInterface";
import { createExamService } from "../../services/exams/createExam.service";

export const createExamController = async (req: Request, res: Response) => {
  const idDoctor: string = req.doctor.id;
  const idPatient: string = req.params.id;
  const dataExam: ICreateExamRequest = req.body;
  const newExam = await createExamService(idDoctor, idPatient, dataExam);

  return res.status(201).json(newExam);
};
