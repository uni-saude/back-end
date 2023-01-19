import { Request, Response } from "express";
import listDoctorByIdService from "../../services/doctors/listDoctorById.service";

const listDoctorByIdController = async (req: Request, res: Response) => {
  const doctorId = req.params.id;
  const doctor = await listDoctorByIdService(doctorId);
  return res.json(doctor);
};

export default listDoctorByIdController;
