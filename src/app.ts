import "express-async-errors";
import express from "express";
import cors from "cors";
import routePatients from "./routes/patientsRouter";
import { handleErrorMiddleware } from "./error";
import { doctorsRouter } from "./routes/doctorsRouter";
import { specializationsRouter } from "./routes/specializationsDoctorsRouter";

export const app = express();

app.use(express.json());
app.use("*", cors());
app.use("/doctors", doctorsRouter);
app.use("/specializations", specializationsRouter);

app.use("/patients", routePatients)

app.use(handleErrorMiddleware);
