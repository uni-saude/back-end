import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./error";
import { doctorsRouter } from "./routes/doctorsRouter";

export const app = express();

app.use(express.json());
app.use("*", cors());
app.use("/doctors", doctorsRouter);

app.use(handleErrorMiddleware);
