import { Router } from "express";
import { createAppointmentController } from "../controllers/appointments/createAppointment.controller";

const appointmentRouter = Router();

appointmentRouter.post("", createAppointmentController);

export { appointmentRouter };
