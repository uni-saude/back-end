import { IPatientExpressRequest } from "../../interfaces/patientsInterface";

declare global {
  namespace Express {
    interface Request {
      patient: IPatientExpressRequest;
      address: {
        id: string;
      };
    }
  }
}
