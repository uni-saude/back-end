import { Router } from "express";
import { patientsCreateController } from "../controllers/patients/createPatient.controller";
import { patientsSessionController } from "../controllers/patients/sessionPatient.controller";
import {
  patientDataRequestSchema,
  patientSessionRequestSchema,
} from "../schemas/patients";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { patientsUpdateController } from "../controllers/patients/updatePatients.controller";
import { ensureAuthMiddleware } from "../middlewares/Global/ensureAuth.middleware";
import { patientsDeleteController } from "../controllers/patients/deletePatient.controller";

const routePatients = Router();

routePatients.post(
  "",
  verifyBodyRequestMiddleware(patientDataRequestSchema),
  patientsCreateController
);
routePatients.post(
  "/login",
  verifyBodyRequestMiddleware(patientSessionRequestSchema),
  patientsSessionController
);
routePatients.patch("/:id", ensureAuthMiddleware, patientsUpdateController);
routePatients.delete("/:id", ensureAuthMiddleware, patientsDeleteController);

export default routePatients;
