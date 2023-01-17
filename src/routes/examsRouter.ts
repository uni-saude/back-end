import { Router } from "express";
import { createExamController } from "../controllers/exams/createExam.controller";
import { ensureAuthDoctorMiddleware } from "../middlewares/Doctor/ensureAuthDoctor.middleware";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { createExamSchema } from "../schemas/exams";

export const examsRouter = Router();

examsRouter.post(
  "/:id",
  verifyBodyRequestMiddleware(createExamSchema),
  ensureAuthDoctorMiddleware,
  createExamController
);
