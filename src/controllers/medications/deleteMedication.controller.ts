import { Request, Response } from "express"
import { medicationDeleteService } from "../../services/medications/deleteMedication.service"

const medicationDeleteController = async (req:Request, res:Response):Promise<object> => {
    const medicationId = req.params.id
    const deletedMedication = await medicationDeleteService(medicationId)
    return res.status(204).json(deletedMedication)
}
export {medicationDeleteController}