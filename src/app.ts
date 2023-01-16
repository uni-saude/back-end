import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./error";

import tratamentsRoutes from "./routes/tratamentsRouter";
import routePatients from "./routes/patientsRouter";
import { doctorsRouter } from "./routes/doctorsRouter";
import { routeTutors } from "./routes/tutorsRouter";
import { specializationsRouter } from "./routes/specializationsDoctorsRouter";
import { routeMedications } from "./routes/medicationsRouter";

export const app = express();

app.use(express.json());
app.use("*", cors());


app.use("/trataments", tratamentsRoutes);
app.use("/doctors", doctorsRouter);
app.use("/specializations", specializationsRouter);
app.use("/patients", routePatients);
app.use("/tutors", routeTutors);
app.use("/medications", routeMedications)


app.use(handleErrorMiddleware);
