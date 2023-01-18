import { AppDataSource } from "../../data-source";
import Appointment from "../../entities/appointments.entity";
import { AppError } from "../../error";
import { IAppointmentRequest } from "../../interfaces/appointmentsInterface";

const createAppointMentService = async (payload: IAppointmentRequest) => {
  const appointmentRep = AppDataSource.getRepository(Appointment);

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

  await appointmentRep.save(newAppointment);

  return newAppointment;
};

export { createAppointMentService };
