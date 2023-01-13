import { Request, Response } from "express";
import { createAddressPatientService } from "../../services/patients/createAddressPatient";

const createAddressPatientController = async (req:Request, res:Response) => {
    const addressData:Request = req.body
    const createdAddress = await createAddressPatientService(addressData)
    return res.status(201).json(createdAddress)
}
export {createAddressPatientController};