import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./error";
import { appointmentRouter } from "./routes/appointmentRouter";

export const app = express();

app.use(express.json());
app.use("*", cors());
app.use("/appointments", appointmentRouter);

app.use(handleErrorMiddleware);
