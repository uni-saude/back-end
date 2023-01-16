import { Router } from "express";
import { getAllSpecializationsController } from "../controllers/specializations/getAllSpecializationsController";

export const specializationsRouter = Router();
specializationsRouter.get("/", getAllSpecializationsController);
