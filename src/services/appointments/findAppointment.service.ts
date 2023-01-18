import { AppDataSource } from "../../data-source";
import Appointment from "../../entities/appointments.entity";
import { AppError } from "../../error";

const findAppointmentService = async (id: string) => {
  const appointmentRep = AppDataSource.getRepository(Appointment);

  const foundAppointment = await appointmentRep.findOneBy({ id: id });

  if (!foundAppointment) {
    throw new AppError(404, "appointment not found");
  }

  return foundAppointment;
};

export { findAppointmentService };
