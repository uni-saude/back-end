import { Router } from "express";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { tutorDataRequestSchema } from "../schemas/patients";
import { TutorCreateController } from "../controllers/tutors/createTutor.controller";
import { ensureAuthMiddleware } from "../middlewares/Global/ensureAuth.middleware";
import { tutorUpdateController } from "../controllers/tutors/updateTutor.controller";

const routeTutors = Router()
routeTutors.post("", verifyBodyRequestMiddleware(tutorDataRequestSchema), TutorCreateController)
routeTutors.patch("/:id", ensureAuthMiddleware,tutorUpdateController)

export {routeTutors};