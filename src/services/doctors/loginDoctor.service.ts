import { compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";
import { AppError } from "../../error";
import {
  IDoctorResponse,
  ILoginDoctorRequest,
} from "../../interfaces/doctorsInterface";
import { doctorResponseSchema } from "../../schemas/doctors";

export const loginDoctorService = async (
  dataLogin: ILoginDoctorRequest
): Promise<{ token: string; doctor: IDoctorResponse }> => {
  const doctorsRepository = AppDataSource.getRepository(Doctor);

  const doctor = await doctorsRepository.findOne({
    where: { email: dataLogin.email },
    relations: {
      specialization: true,
    },
  });

  if (!doctor) {
    throw new AppError(401, "Email or password invalid");
  }

  const matchPassword: boolean = await compare(
    dataLogin.password,
    doctor.password
  );

  if (!matchPassword) {
    throw new AppError(401, "Email or password invalid");
  }

  const token: string = jwt.sign(
    { email: dataLogin.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "12h",
      subject: doctor.id,
    }
  );

  const doctorResponse: IDoctorResponse = await doctorResponseSchema.validate(
    doctor,
    {
      stripUnknown: true,
    }
  );

  return {
    token,
    doctor: doctorResponse,
  };
};
