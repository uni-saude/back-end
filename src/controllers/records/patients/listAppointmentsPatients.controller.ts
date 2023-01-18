import { Request, Response } from "express"
import { listAppointmentsPatientsService } from "../../../services/records/patients/listAppointmentsPatients.service"

const listAppointmentsPatientsController = async (req:Request, res:Response) => {
    const patientId = req.patient.id
    const list = await listAppointmentsPatientsService(patientId)
    return res.status(200).json(list)
}
export {listAppointmentsPatientsController}