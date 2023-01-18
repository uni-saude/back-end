import {Request, Response} from "express"
import { medicationUpdateService } from "../../services/medications/updateMedications.service"

const medicationUpdateController = async (req:Request, res:Response):Promise<object> => {
    const medicationIdForUpdate = req.params.id
    const medicationBodyUpdate:object = req.body
    const medicationUpdated = await medicationUpdateService(medicationBodyUpdate,medicationIdForUpdate)
    return res.status(200).json(medicationUpdated)
}
export {medicationUpdateController};