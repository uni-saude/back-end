import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IAppointmentRequest,
  IAppointmentResponse,
} from "../../interfaces/appointmentsInterface";

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

const appointmentResponseSerializer: SchemaOf<IAppointmentResponse> = yup
  .object()
  .shape({
    appointment_date_type: yup.string(),
    appointment_date: yup.date(),
    specialization: yup.string(),
    id: yup.string(),
  });

export { appointmentSerializer, appointmentResponseSerializer };
