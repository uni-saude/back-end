import { AppDataSource } from "../../data-source";
import Appointment from "../../entities/appointments.entity";

const listAppointmentService = async () => {
  const appointmentRep = AppDataSource.getRepository(Appointment);

  const appointments = await appointmentRep.find();

  return appointments;
};

export { listAppointmentService };
