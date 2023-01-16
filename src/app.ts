import "express-async-errors";
import express from "express";
import cors from "cors";
import routePatients from "./routes/patientsRouter";
import { handleErrorMiddleware } from "./error";
import { doctorsRouter } from "./routes/doctorsRouter";
import { routeTutors } from "./routes/tutorsRouter";

export const app = express();

app.use(express.json());
app.use("*", cors());

app.use("/doctors", doctorsRouter);
app.use("/patients", routePatients);
app.use("/tutors", routeTutors)

app.use(handleErrorMiddleware);
