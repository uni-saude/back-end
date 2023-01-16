import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./error";
import tratamentsRoutes from "./routes/tratamentsRouter";

export const app = express();

app.use(express.json());
app.use("*", cors());

app.use("/trataments", tratamentsRoutes);

app.use(handleErrorMiddleware);
