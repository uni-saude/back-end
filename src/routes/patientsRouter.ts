import { Router } from "express";
import { patientsCreateController } from "../controllers/patients/createPatient.controller";
import { patientsSessionController } from "../controllers/patients/sessionPatient.controller";
import { TutorCreateController } from "../controllers/patients/createTutor.controller";
import { createAddressPatientController } from "../controllers/patients/createAddressPatient.controller";
import { patientDataRequestSerializer, patientSessionRequestSerializer, tutorDataRequestSerializer } from "../schemas/patients";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { patientsUpdateController } from "../controllers/patients/updatePatients.controller";
import { ensureAuthMiddleware } from "../middlewares/Global/ensureAuth.middleware";
import { patientsDeleteController } from "../controllers/patients/deletePatient.controller";


const routePatients = Router()

routePatients.post("", verifyBodyRequestMiddleware(patientDataRequestSerializer), patientsCreateController)
routePatients.post("/login", verifyBodyRequestMiddleware(patientSessionRequestSerializer), patientsSessionController)
routePatients.patch("/:id", ensureAuthMiddleware, patientsUpdateController)
routePatients.delete("/:id", ensureAuthMiddleware, patientsDeleteController)
routePatients.post("/tutor", verifyBodyRequestMiddleware(tutorDataRequestSerializer), TutorCreateController)

export default routePatients