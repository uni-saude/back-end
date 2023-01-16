import { Router } from "express";
import { createDoctorController } from "../controllers/doctors/createDoctor.controller";
import { loginDoctorController } from "../controllers/doctors/loginDoctorController";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { createDoctorSchema, doctorLoginRequest } from "../schemas/doctors";

export const doctorsRouter = Router();
doctorsRouter.post(
  "/",
  verifyBodyRequestMiddleware(createDoctorSchema),
  createDoctorController
);
doctorsRouter.post(
  "/login",
  verifyBodyRequestMiddleware(doctorLoginRequest),
  loginDoctorController
);
