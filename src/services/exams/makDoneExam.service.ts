import { AppDataSource } from "../../data-source";
import Exam from "../../entities/exams.entity";
import { AppError } from "../../error";
import {
  IUpdateExamRequest,
  IUpdateExamResponse,
} from "../../interfaces/examsInterface";

export const makDonExamService = async (
  idExam: string,
  idPatient: string,
  bodyUpdate: IUpdateExamRequest
): Promise<IUpdateExamResponse> => {
  const examRepository = AppDataSource.getRepository(Exam);
  const examQueryBuilder = examRepository.createQueryBuilder("e");

  const foundExam = await examQueryBuilder
    .leftJoin("e.patient", "p")
    .where("e.id = :idExam", { idExam })
    .andWhere("p.id = :idPatient", { idPatient })
    .getOne();

  if (!foundExam) {
    throw new AppError(404, "Exam not found");
  }

  const examUpdated = examRepository.create({ ...foundExam, ...bodyUpdate });
  await examRepository.save(examUpdated);

  return examUpdated;
};
