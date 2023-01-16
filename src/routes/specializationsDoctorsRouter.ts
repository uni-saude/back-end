import { Router } from "express";
import { getAllSpecializationsController } from "../controllers/specializations/getAllSpecializationsDoctorsController";

export const specializationsRouter = Router();
specializationsRouter.get("/", getAllSpecializationsController);
