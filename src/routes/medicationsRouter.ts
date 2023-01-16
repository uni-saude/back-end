import { Router } from "express";
import { medicationCreateController } from "../controllers/medications/createMedication.controller";

const routeMedications = Router()

routeMedications.post("", medicationCreateController)
// routeMedications.patch("", )

export {routeMedications};