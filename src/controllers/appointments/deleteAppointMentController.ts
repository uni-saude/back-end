import { Request, Response } from "express";
import { deleteAppointmentService } from "../../services/appointments/deleteAppointment.service";

const deleteAppointmentController = async (req: Request, res: Response) => {
  const data = await deleteAppointmentService(req.params.id);
  return res.status(204).json(data);
};

export { deleteAppointmentController };
