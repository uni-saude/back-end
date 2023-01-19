import { Request, Response } from "express";
import { listAppointmentService } from "../../services/appointments/listAppointment.service";

const listAppointmentController = async (req: Request, res: Response) => {
  const data = await listAppointmentService();
  return res.status(200).json(data);
};

export { listAppointmentController };
