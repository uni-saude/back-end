import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppDataSource } from "../../data-source";
import { compare } from "bcrypt";
import { IPatientSessionRequest } from "../../interfaces/patientsInterface";
import { AppError } from "../../error";
import Patient from "../../entities/patientsEntity";

const patientsSessionService = async ({
  email,
  password,
}: IPatientSessionRequest): Promise<any> => {
  const patientRepo = AppDataSource.getRepository(Patient);
  const patientFind = await patientRepo.findOneBy({ email: email });

  if (!patientFind || patientFind === null) {
    throw new AppError(403, "User or password invalid");
  }
  const passwordMatch = await compare(password, patientFind.password);

  if (!passwordMatch) {
    throw new AppError(403, "User or password invalid");
  }

  const token = jwt.sign(
    { user: { id: patientFind.id } },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
      subject: patientFind.id,
    }
  );
  return { token: token };
};
export { patientsSessionService };
