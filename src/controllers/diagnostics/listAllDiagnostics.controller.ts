import { Request, Response } from "express-serve-static-core";
import listAllDiagnosticsService from "../../services/diagnostics/listAllDiagnostics.service";

const listAllDiagnosticsController = async (req: Request, res: Response) => {
  const idPatient: string = req.patient.id;
  const diagnostics = await listAllDiagnosticsService(idPatient);
  return res.json(diagnostics);
};

export default listAllDiagnosticsController;
