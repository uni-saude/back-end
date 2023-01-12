import { Request, Response } from "express";
import { createAppointMentService } from "../../services/appointments/createAppointment.service";

const createAppointmentController = async (req: Request, res: Response) => {
  const data = await createAppointMentService(req.body);

  return res.status(200).json(data);
};

export { createAppointmentController };
