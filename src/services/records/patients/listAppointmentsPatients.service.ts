import { AppDataSource } from "../../../data-source"
import Appointment from "../../../entities/appointments.entity"

const listAppointmentsPatientsService = async (patientId:string) => {
    // Criar conexão com o bando de dados
    const appointRepo = AppDataSource.getRepository(Appointment)
    console.log("conectado");
    // Buscar as consultas do patient pelo id 
    const listAppointtmentsPatient = await appointRepo.createQueryBuilder("appointments")
    .select("appointments")
    .where("appointments.patient = :patient", {patient:patientId})
    .getMany()
    console.log(listAppointtmentsPatient);
    
    // Retornar a lista
    return listAppointtmentsPatient
}
export {listAppointmentsPatientsService}