import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./error";

import addressesRouters from "./routes/addressesRouter";
import tratamentsRoutes from "./routes/tratamentsRouter"; 
import routePatients from "./routes/patientsRouter";
import { doctorsRouter } from "./routes/doctorsRouter"; 
import { routeTutors } from "./routes/tutorsRouter";
import { specializationsRouter } from "./routes/specializationsDoctorsRouter"; 
import { routeMedications } from "./routes/medicationsRouter";
import diagnosticsRouters from "./routes/diagnosticsRouter";
import vaccinesRoutes from "./routes/vaccines.router";
import { examsRouter } from "./routes/examsRouter";








export const app = express();

app.use(express.json());
app.use("*", cors());



app.use("/address", addressesRouters);
app.use("/trataments", tratamentsRoutes);
app.use("/doctors", doctorsRouter);
app.use("/specializations", specializationsRouter);
app.use("/patients", routePatients); 
app.use("/tutors", routeTutors);x
app.use("/vaccines", vaccinesRoutes);
app.use("/medications", routeMedications);
app.use("/diagnostics", diagnosticsRouters);
app.use("/exams", examsRouter);


app.use(handleErrorMiddleware);
