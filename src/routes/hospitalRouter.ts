import { Router } from "express";
import { createHospitalController } from "../controllers/hospitals/createHospital.controller";
import { deleteHospitalController } from "../controllers/hospitals/deleteHospitalController";
import { findHospitalController } from "../controllers/hospitals/findHospitalController";
import { listHospitalsController } from "../controllers/hospitals/listHospitalsController";

const hospitalsRouter = Router();

hospitalsRouter.post("/", createHospitalController);
hospitalsRouter.get("/", listHospitalsController);
hospitalsRouter.get("/:id", findHospitalController);
hospitalsRouter.delete("/:id", deleteHospitalController);

export { hospitalsRouter };
