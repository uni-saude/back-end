import { Router } from "express";
import createTratamentController from "../controllers/trataments/createTratament.controller";
import deleteTratamentController from "../controllers/trataments/deleteTratament.controller";
import listAllTratamentControllers from "../controllers/trataments/listAllTrataments.controller";
import listTratamentByIdController from "../controllers/trataments/listTratamentById.controller";
import updateTratamentController from "../controllers/trataments/updateTratament.controller";
import { verifyBodyRequestMiddleware } from "../middlewares/Global/verifyBodyRequest.middleware";
import { tratamentSerializer } from "../schemas/trataments/trataments.serializer";

const tratamentsRoutes = Router();

tratamentsRoutes.post(
  "",
  verifyBodyRequestMiddleware(tratamentSerializer),
  createTratamentController
);

tratamentsRoutes.get("", listAllTratamentControllers);
tratamentsRoutes.get("/:id", listTratamentByIdController);
tratamentsRoutes.delete("/:id", deleteTratamentController);
tratamentsRoutes.patch("/:id", updateTratamentController);

export default tratamentsRoutes;
