import { Router } from "express";
import createTratamentController from "../controllers/trataments/createTratament.controller";
import deleteTratamentController from "../controllers/trataments/deleteTratament.controller";
import listAllTratamentControllers from "../controllers/trataments/listAllTrataments.controller";
import listTratamentByIdController from "../controllers/trataments/listTratamentById.controller";
import updateTratamentController from "../controllers/trataments/updateTratament.controller";
import { ensureAuthDoctorMiddleware } from "../middlewares/Doctor/ensureAuthDoctor.middleware";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { ensureAuthPatientMiddleware } from "../middlewares/patient/ensureAuthPatient.middleware";
import { tratamentSerializer } from "../schemas/trataments/trataments.serializer";

const tratamentsRoutes = Router();

tratamentsRoutes.post(
  "/:id",
  verifyBodyRequestMiddleware(tratamentSerializer),
  ensureAuthDoctorMiddleware,
  createTratamentController
);

tratamentsRoutes.get(
  "",
  ensureAuthPatientMiddleware,
  listAllTratamentControllers
);
tratamentsRoutes.get("/:id", listTratamentByIdController);
tratamentsRoutes.delete("/:id", deleteTratamentController);
tratamentsRoutes.patch("/:id", updateTratamentController);

export default tratamentsRoutes;
