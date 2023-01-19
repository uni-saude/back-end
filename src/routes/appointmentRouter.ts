import { Router } from "express";
import { createAppointmentController } from "../controllers/appointments/createAppointment.controller";
import { deleteAppointmentController } from "../controllers/appointments/deleteAppointMentController";
import { editAppointmentController } from "../controllers/appointments/editAppointMentController";
import { findAppointmentController } from "../controllers/appointments/findAppointmentController";
import { listAppointmentController } from "../controllers/appointments/listAppointmentsController";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { appointmentSerializer } from "../schemas/appointments";

const appointmentRouter = Router();

appointmentRouter.post(
  "",
  verifyBodyRequestMiddleware(appointmentSerializer),
  createAppointmentController
);
appointmentRouter.get("", listAppointmentController);
appointmentRouter.get("/:id", findAppointmentController);
appointmentRouter.delete("/:id", deleteAppointmentController);
appointmentRouter.patch("/:id", editAppointmentController);

export { appointmentRouter };
