import { AppDataSource } from "../../data-source";
import { compare } from "bcrypt"
import { IPatientSessionRequest } from "../../interfaces/patientsInterface";
import { AppError } from "../../error";
import jwt from "jsonwebtoken"
import Patient from "../../entities/patientsEntity";

const patientsSessionService = async (patientData:IPatientSessionRequest):Promise<any> => {
    const patientRepo = AppDataSource.getRepository(Patient)
    const patientFind = await patientRepo.findOneBy({email: patientData.email})
    const passwordMatch = await compare(patientData.password, patientFind.password)

    if(!patientFind || !passwordMatch){
        throw new AppError(403, "User or password invalid")
    }

    const token = jwt.sign(
        {user:{id: patientFind.id}},
        process.env.SECRET_KEY,
        {
            expiresIn: "24h"
        }
    )
    console.log(token, typeof token, 'TOKEN');
    
    return token
}
export {patientsSessionService};