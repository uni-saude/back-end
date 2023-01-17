import { Router } from "express";
import createDiagnosticController from "../controllers/diagnostics/createDiagnostic.controller";
import deleteDiagnosticController from "../controllers/diagnostics/deleteDiagnostic.controller";
import listAllDiagnosticsController from "../controllers/diagnostics/listAllDiagnostics.controller";
import listDiagnosticByIdController from "../controllers/diagnostics/listDiagnosticById.controller";
import updateDiagnosticController from "../controllers/diagnostics/updateDiagnostic.controller";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import {
  diagnosticSerializer,
  diagnosticUpdateSerializer,
} from "../schemas/diagnostics";

const diagnosticsRouters = Router();

diagnosticsRouters.post(
  "",
  verifyBodyRequestMiddleware(diagnosticSerializer),
  createDiagnosticController
);
diagnosticsRouters.get("", listAllDiagnosticsController);
diagnosticsRouters.get("/:id", listDiagnosticByIdController);
diagnosticsRouters.patch(
  "/:id",
  verifyBodyRequestMiddleware(diagnosticUpdateSerializer),
  updateDiagnosticController
);
diagnosticsRouters.delete("/:id", deleteDiagnosticController);

export default diagnosticsRouters;
