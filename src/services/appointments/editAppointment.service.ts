import { AppDataSource } from "../../data-source";
import Appointment from "../../entities/appointments.entity";
import { AppError } from "../../error";
import { IAppointmentRequest } from "../../interfaces/appointmentsInterface";

const editAppointmentService = async (
  payload: IAppointmentRequest,
  id: string
) => {
  const appointmentRep = AppDataSource.getRepository(Appointment);
  const appointment = await appointmentRep.findOneBy({ id: id });
  const cantChangeId = payload.hasOwnProperty("id");
  const cantChangeSolicitationDate =
    payload.hasOwnProperty("solicitation_date");

  if (cantChangeId || cantChangeSolicitationDate) {
    throw new AppError(400, "invalid Data input");
  }

  if (!appointment) {
    throw new AppError(404, "appointment not found");
  }

  const editedAppointment = appointmentRep.create({
    ...appointment,
    ...payload,
  });

  await appointmentRep.save(editedAppointment);

  return editedAppointment;
};

export { editAppointmentService };
