import { AppDataSource } from "../../data-source";
import Appointment from "../../entities/appointments.entity";
import Doctor from "../../entities/doctors.entity";
import Hospital from "../../entities/hospitals.entity";
import Patient from "../../entities/patientsEntity";
import { AppError } from "../../error";
import { IAppointmentRequest } from "../../interfaces/appointmentsInterface";
import { appointmentResponseSerializer } from "../../schemas/appointments";

const createAppointMentService = async (payload: IAppointmentRequest) => {
  const appointmentRep = AppDataSource.getRepository(Appointment);
  const patientRep = AppDataSource.getRepository(Patient);
  const doctorRep = AppDataSource.getRepository(Doctor);
  const hospitalRep = AppDataSource.getRepository(Hospital);

  const idDoctor: string = payload.doctor_id;
  const idPatient: string = payload.patient_id;
  const idHospital: string = payload.hospital_id;

  const patient = await patientRep.findOneBy({ id: idPatient });
  if (!patient) throw new AppError(404, "Patint not found");

  const doctor = await doctorRep.findOneBy({ id: idDoctor });
  if (!doctor) throw new AppError(404, "Doctor not found");

  const hospital = await hospitalRep.findOneBy({ id: idHospital });
  if (!hospital) throw new AppError(404, "Hospital not found");

  const date = payload.appointment_date;

  const day = date.getDay();

  const hour = date.getHours();

  const localHour = hour + 3;

  if (day === 0 || day === 6) {
    throw new AppError(400, "invalid Date");
  }

  if (localHour <= 8 || localHour >= 18) {
    throw new AppError(400, "invalid Date");
  }

  const newAppointment = appointmentRep.create(payload);
  newAppointment.patient = patient;
  newAppointment.doctor = doctor;
  newAppointment.hospital = hospital;

  await appointmentRep.save(newAppointment);

  return await appointmentResponseSerializer.validate(newAppointment, {
    stripUnknown: true,
  });
};

export { createAppointMentService };
