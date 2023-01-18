import { Router } from "express";
import { patientsCreateController } from "../controllers/patients/createPatient.controller";
import { patientsSessionController } from "../controllers/patients/sessionPatient.controller";
import {
  patientDataRequestSchema,
  patientSessionRequestSchema,
} from "../schemas/patients";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { patientsUpdateController } from "../controllers/patients/updatePatients.controller";
import { patientsDeleteController } from "../controllers/patients/deletePatient.controller";
import { ensureAuthPatientMiddleware } from "../middlewares/patient/ensureAuthPatient.middleware";

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
routePatients.patch(
  "/:id",
  ensureAuthPatientMiddleware,
  patientsUpdateController
);
routePatients.delete(
  "/:id",
  ensureAuthPatientMiddleware,
  patientsDeleteController
);

export default routePatients;
