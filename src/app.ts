import "express-async-errors";
import express from "express";
import cors from "cors";
import routePatients from "./routes/patientsRouter";
import { handleErrorMiddleware } from "./error";
import { doctorsRouter } from "./routes/doctorsRouter";
import { hospitalsRouter } from "./routes/hospitalRouter";

export const app = express();

app.use(express.json());
app.use("*", cors());

app.use("/hospitals", hospitalsRouter);

app.use(handleErrorMiddleware);
