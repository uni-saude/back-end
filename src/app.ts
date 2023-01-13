import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./error";
import addressesRouters from "./routes/addressesRouter";

export const app = express();

app.use(express.json());
app.use("*", cors());

app.use("/address", addressesRouters);

app.use(handleErrorMiddleware);
