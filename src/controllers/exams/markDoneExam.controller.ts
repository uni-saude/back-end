import { Request, Response } from "express";
import {
  IUpdateExamRequest,
  IUpdateExamResponse,
} from "../../interfaces/examsInterface";
import { makDonExamService } from "../../services/exams/makDoneExam.service";

export const markDoneExamController = async (req: Request, res: Response) => {
  const idExam: string = req.params.id;
  const idPatient: string = req.patient.id;

  const bodyUpdate: IUpdateExamRequest = req.body;
  const examUpdated: IUpdateExamResponse = await makDonExamService(
    idExam,
    idPatient,
    bodyUpdate
  );

  return res.status(200).json(examUpdated);
};
