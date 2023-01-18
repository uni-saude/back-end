import { Request, Response } from "express-serve-static-core";
import { IDiagnosticUpdate } from "../../interfaces/diagnosticInterface";
import updateDiagnosticService from "../../services/diagnostics/updateDiagnostic.service";

const updateDiagnosticController = async (req: Request, res: Response) => {
  const diagnosticData: IDiagnosticUpdate = req.body;
  const diagnosticId = req.params.id;
  const updatedDiagnostic = await updateDiagnosticService(
    diagnosticData,
    diagnosticId
  );
  return res.json(updatedDiagnostic);
};

export default updateDiagnosticController;
