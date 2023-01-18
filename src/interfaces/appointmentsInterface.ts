interface IAppointmentRequest {
  appointment_date: Date;
  appointment_date_type: string;
  specialization: string;
  patient_id: string;
  hospital_id: string;
  doctor_id: string;
}

interface IAppointmentResponse {
  id: string;
  specialization: string;
  appointment_date: Date;
  appointment_date_type: string;
}

export { IAppointmentRequest, IAppointmentResponse };
