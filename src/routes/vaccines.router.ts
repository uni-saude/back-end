import { Router } from "express";
import createVaccineController from "../controllers/vaccines/createVaccine.controller";
import deleteVaccineController from "../controllers/vaccines/deleteVaccine.controller";
import listAllVaccinesController from "../controllers/vaccines/listAllVaccines.controller";
import listVaccinesByIdController from "../controllers/vaccines/listVaccinesById.controller";
import updateVaccineController from "../controllers/vaccines/updateVaccine.controller";

const vaccinesRoutes = Router();

vaccinesRoutes.post("", createVaccineController);
vaccinesRoutes.get("", listAllVaccinesController);
vaccinesRoutes.get("/:id", listVaccinesByIdController);
vaccinesRoutes.patch("/:id", updateVaccineController);
vaccinesRoutes.delete("/:id", deleteVaccineController);

export default vaccinesRoutes;
