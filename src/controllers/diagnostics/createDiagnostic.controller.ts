import { Request, Response } from "express-serve-static-core";
import createDiagnosticService from "../../services/diagnostics/createDiagnostic.service";

const createDiagnosticController = async (req: Request, res: Response) => {
  const diagnosticData = req.body;
  const idPatient: string = req.params.id;
  const newDiagnostic = await createDiagnosticService(
    diagnosticData,
    idPatient
  );
  return res.status(201).json(newDiagnostic);
};

export default createDiagnosticController;
