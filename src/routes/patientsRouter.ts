import { Router } from "express";
import { patientsCreateController } from "../controllers/patients/createPatient.controller";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { patientDataRequestSerializer, tutorDataRequestSerializer } from "../schemas/patients";
import { TutorCreateController } from "../controllers/patients/createTutor.controller";

const routePatients = Router()

routePatients.post("", verifyBodyRequestMiddleware(patientDataRequestSerializer), patientsCreateController)
routePatients.post("/tutors", verifyBodyRequestMiddleware(tutorDataRequestSerializer), TutorCreateController)

export default routePatients