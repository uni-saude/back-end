import { Router } from "express";
import { patientsCreateController } from "../controllers/patients/createPatient.controller";
import { patientsSessionController } from "../controllers/patients/sessionPatient.controller";
import { TutorCreateController } from "../controllers/patients/createTutor.controller";
import { createAddressPatientController } from "../controllers/patients/createAddressPatient.controller";
import { patientDataRequestSerializer, patientSessionRequestSerializer, tutorDataRequestSerializer } from "../schemas/patients";
import { addressDataRequestSerializer } from "../schemas/addresses";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";


const routePatients = Router()

routePatients.post("", verifyBodyRequestMiddleware(patientDataRequestSerializer), patientsCreateController)
routePatients.post("", verifyBodyRequestMiddleware(patientSessionRequestSerializer),patientsSessionController)
routePatients.post("/tutor", verifyBodyRequestMiddleware(tutorDataRequestSerializer), TutorCreateController)
routePatients.post("/address", verifyBodyRequestMiddleware(addressDataRequestSerializer),createAddressPatientController)
export default routePatients