import { Request, Response } from "express";
import listExamByIdService from "../../services/exams/listExamsById.service";

const listExamByIdController = async (req: Request, res: Response) => {
  const examId = req.params.id;
  const exam = await listExamByIdService(examId);
  return res.json(exam);
};

export default listExamByIdController;
