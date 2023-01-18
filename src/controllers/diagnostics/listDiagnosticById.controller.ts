import { Request, Response } from "express-serve-static-core";
import listDiagnosticByIdService from "../../services/diagnostics/listDiagnosticById.service";

const listDiagnosticByIdController = async (req: Request, res: Response) => {
  const diagnosticId = req.params.id;
  const diagnostic = await listDiagnosticByIdService(diagnosticId);
  return res.json(diagnostic);
};

export default listDiagnosticByIdController;
