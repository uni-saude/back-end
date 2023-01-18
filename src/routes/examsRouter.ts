import { Router } from "express";
import { createExamController } from "../controllers/exams/createExam.controller";
import listAllExamsController from "../controllers/exams/listAllExams.controller";
import listExamByIdController from "../controllers/exams/listExamById.controller";
import { markDoneExamController } from "../controllers/exams/markDoneExam.controller";
import { ensureAuthDoctorMiddleware } from "../middlewares/Doctor/ensureAuthDoctor.middleware";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { ensureAuthPatientMiddleware } from "../middlewares/patient/ensureAuthPatient.middleware";
import { createExamSchema, markDoneExamRequestSchema } from "../schemas/exams";

export const examsRouter = Router();

examsRouter.post(
  "/:id",
  verifyBodyRequestMiddleware(createExamSchema),
  ensureAuthDoctorMiddleware,
  createExamController
);

examsRouter.patch(
  "/:id",
  verifyBodyRequestMiddleware(markDoneExamRequestSchema),
  ensureAuthPatientMiddleware,
  markDoneExamController
);

examsRouter.get("", listAllExamsController);

examsRouter.get("/:id", listExamByIdController);
