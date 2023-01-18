import { Request, Response } from "express";
import listAllExamsService from "../../services/exams/listAllExams.service";

const listAllExamsController = async (req: Request, res: Response) => {
  const AllExams = await listAllExamsService();
  return res.json(AllExams);
};

export default listAllExamsController;
