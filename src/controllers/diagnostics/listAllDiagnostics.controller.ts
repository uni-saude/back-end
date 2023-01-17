import { Request, Response } from "express-serve-static-core";
import listAllDiagnosticsService from "../../services/diagnostics/listAllDiagnostics.service";

const listAllDiagnosticsController = async (req: Request, res: Response) => {
  const diagnostics = await listAllDiagnosticsService();
  return res.json(diagnostics);
};

export default listAllDiagnosticsController;
