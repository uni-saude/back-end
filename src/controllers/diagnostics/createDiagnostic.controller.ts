import { Request, Response } from "express-serve-static-core";
import createDiagnosticService from "../../services/diagnostics/createDiagnostic.service";

const createDiagnosticController = async (req: Request, res: Response) => {
  const diagnosticData = req.body;
  const newDiagnostic = await createDiagnosticService(diagnosticData);
  return res.status(201).json(newDiagnostic);
};

export default createDiagnosticController;
