import { Router } from "express";
import { medicationCreateController } from "../controllers/medications/createMedication.controller";
import { medicationDeleteController } from "../controllers/medications/deleteMedication.controller";
import { ensureAuthMiddleware } from "../middlewares/Global/ensureAuth.middleware";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { medicationBodySchema } from "../schemas/medications";
import { medicationUpdateController } from "../controllers/medications/updateMedication.controller";
import { medicationListController } from "../controllers/medications/listMedications.controller";

const routeMedications = Router()

routeMedications.post("", ensureAuthMiddleware, verifyBodyRequestMiddleware(medicationBodySchema),medicationCreateController)
routeMedications.delete("/:id", ensureAuthMiddleware, medicationDeleteController)
routeMedications.patch("/:id", ensureAuthMiddleware, medicationUpdateController)
routeMedications.get("", ensureAuthMiddleware, medicationListController)

export {routeMedications};