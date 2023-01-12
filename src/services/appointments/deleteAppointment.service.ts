import { AppDataSource } from "../../data-source";
import Appointment from "../../entities/appointments.entity";
import { AppError } from "../../error";

const deleteAppointmentService = async (id: string) => {
  const appointmentRep = AppDataSource.getRepository(Appointment);

  const appointment = await appointmentRep.findOneBy({ id: id });

  if (!appointment) {
    throw new AppError(404, "appointment not found");
  }

  await appointmentRep.delete(appointment);

  return {};
};

export { deleteAppointmentService };
