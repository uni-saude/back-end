import { Request, Response } from "express";
import { deleteHospitalService } from "../../services/hospitals/deleteHospital.service";

const deleteHospitalController = async (req: Request, res: Response) => {
  const data = await deleteHospitalService(req.params.id);

  return res.status(204).json(data);
};

export { deleteHospitalController };
