import { AppDataSource } from "../../data-source";
import Appointment from "../../entities/appointments.entity";
import { IAppointmentRequest } from "../../interfaces/appointmentsInterface";

const createAppointMentService = async (payload: IAppointmentRequest) => {
  const appointmentRep = AppDataSource.getRepository(Appointment);

  //falta as verificacoes

  const newAppointment = appointmentRep.create(payload);

  await appointmentRep.save(newAppointment);

  return newAppointment;
};

export { createAppointMentService };
