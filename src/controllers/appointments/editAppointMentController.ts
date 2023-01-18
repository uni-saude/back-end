import { Request, Response } from "express";
import { editAppointmentService } from "../../services/appointments/editAppointment.service";

const editAppointmentController = async (req: Request, res: Response) => {
  const data = await editAppointmentService(req.body, req.params.id);
  return res.status(200).json(data);
};

export { editAppointmentController };
