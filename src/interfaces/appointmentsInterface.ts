interface IAppointmentRequest {
  appointment_date: Date;
  appointment_date_type: string;
  especialization: string;
  patient_id: string;
  hospital_id: string;
  doctor_id: string;
}

export { IAppointmentRequest };
