import { IDoctorExpressRequest } from "../../interfaces/doctorsInterface";
import { IPatientExpressRequest } from "../../interfaces/patientsInterface";

declare global {
  namespace Express {
    interface Request {
      patient: IPatientExpressRequest;
<<<<<<< HEAD
      doctor: IDoctorExpressRequest;
=======
      address: {
        id: string;
      };
>>>>>>> develop
    }
  }
}
