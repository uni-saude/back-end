import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAppointmentRequest } from "../../interfaces/appointmentsInterface";

const appointmentSerializer: SchemaOf<IAppointmentRequest> = yup
  .object()
  .shape({
    appointment_date: yup.date().required(),
    appointment_date_type: yup.string().required(),
    specialization: yup.string().required(),
    patient_id: yup.string().required(),
    doctor_id: yup.string().required(),
    hospital_id: yup.string().required(),
  });

export { appointmentSerializer };
