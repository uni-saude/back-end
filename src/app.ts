import "express-async-errors";
import express from "express";
import cors from "cors";
import routePatients from "./routes/patientsRouter";
import { handleErrorMiddleware } from "./error";

export const app = express();

app.use(express.json());
app.use("*", cors());

app.use("/patients", routePatients)

app.use(handleErrorMiddleware);
