import { Router } from "express";
import { medicationCreateController } from "../controllers/medications/createMedication.controller";
import { medicationDeleteController } from "../controllers/medications/deleteMedication.controller";
import { ensureAuthMiddleware } from "../middlewares/Global/ensureAuth.middleware";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { medicationBodySchema } from "../schemas/medications";
import { medicationUpdateController } from "../controllers/medications/updateMedication.controller";
import { medicationListController } from "../controllers/medications/listMedications.controller";
import { ensureAuthDoctorMiddleware } from "../middlewares/Doctor/ensureAuthDoctor.middleware";

const routeMedications = Router();

routeMedications.post(
  "/:id",
  ensureAuthDoctorMiddleware,
  verifyBodyRequestMiddleware(medicationBodySchema),
  medicationCreateController
);
routeMedications.delete(
  "/:id",
  ensureAuthDoctorMiddleware,
  medicationDeleteController
);
routeMedications.patch(
  "/:id",
  ensureAuthDoctorMiddleware,
  medicationUpdateController
);
routeMedications.get("/:id", medicationListController);

export { routeMedications };
