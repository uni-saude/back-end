import { Router } from "express";
import { createSpecializationController } from "../controllers/specializations/createSpecializationController";
import { getAllSpecializationsController } from "../controllers/specializations/getAllSpecializationsController";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { createSpecializationSchema } from "../schemas/specializations";

export const specializationsRouter = Router();
specializationsRouter.get("/", getAllSpecializationsController);
specializationsRouter.post(
  "/",
  verifyBodyRequestMiddleware(createSpecializationSchema),
  createSpecializationController
);
