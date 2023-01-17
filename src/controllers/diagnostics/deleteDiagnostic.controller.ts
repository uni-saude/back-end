import { Request, Response } from "express-serve-static-core";
import deleteDiagnosticService from "../../services/diagnostics/deleteDiagnostic.service";

const deleteDiagnosticController = async (req: Request, res: Response) => {
  const diagnosticId = req.params.id;
  await deleteDiagnosticService(diagnosticId);
  return res.status(204).json();
};

export default deleteDiagnosticController;
