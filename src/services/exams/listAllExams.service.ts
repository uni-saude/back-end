import { AppDataSource } from "../../data-source";
import Exam from "../../entities/exams.entity";

const listAllExamsService = async () => {
  const examsRepository = AppDataSource.getRepository(Exam);

  const exams = await examsRepository.find();

  return exams;
};

export default listAllExamsService;
