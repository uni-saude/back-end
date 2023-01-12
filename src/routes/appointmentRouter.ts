import { Router } from "express";
import { createAppointmentController } from "../controllers/appointments/createAppointment.controller";
import { deleteAppointmentController } from "../controllers/appointments/deleteAppointMentController";
import { findAppointmentController } from "../controllers/appointments/findAppointmentController";
import { listAppointmentController } from "../controllers/appointments/listAppointmentsController";

const appointmentRouter = Router();

appointmentRouter.post("", createAppointmentController);
appointmentRouter.get("", listAppointmentController);
appointmentRouter.get("/:id", findAppointmentController);
appointmentRouter.delete("/:id", deleteAppointmentController);

export { appointmentRouter };
