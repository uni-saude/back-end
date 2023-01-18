import { AppDataSource } from "../../data-source";
import Exam from "../../entities/exams.entity";

const listExamByIdService = async (examId: string) => {
  const exam = await AppDataSource.createQueryBuilder()
    .select("exams")
    .from(Exam, "exams")
    .where("exams.id = :id_do_exam", { id_do_exam: examId })
    .getOne();

  return exam;
};

export default listExamByIdService;
