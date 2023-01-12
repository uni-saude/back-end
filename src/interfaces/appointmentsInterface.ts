interface IAppointmentRequest {
  solicitation_date: string;
  appointment_date: string;
  appointment_date_type: string;
  especialization: string;
  patient_id: string;
  hospital_id: string;
  doctor_id: string;
}

export { IAppointmentRequest };
