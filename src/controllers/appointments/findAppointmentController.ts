import { Request, Response } from "express";
import { findAppointmentService } from "../../services/appointments/findAppointment.service";

const findAppointmentController = async (req: Request, res: Response) => {
  const data = await findAppointmentService(req.params.id);
  return res.status(200).json(data);
};

export { findAppointmentController };
