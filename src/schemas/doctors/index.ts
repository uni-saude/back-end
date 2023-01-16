import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ICreateDoctor,
  IDoctorResponse,
  ILoginDoctorRequest,
} from "../../interfaces/doctorsInterface";

export const createDoctorSchema: SchemaOf<ICreateDoctor> = yup.object().shape({
  name: yup.string().min(3).max(64).trim().required(),
  email: yup.string().min(3).max(72).trim().required(),
  crm: yup.string().required(),
  password: yup.string().min(6).max(72).required(),
  specializationId: yup.string().uuid().required(),
});

export const doctorResponseSchema: SchemaOf<IDoctorResponse> = yup
  .object()
  .shape({
    specialization: yup.string().transform((value) => value.name),
    crm: yup.string(),
    email: yup.string(),
    name: yup.string(),
  });

export const doctorLoginRequest: SchemaOf<ILoginDoctorRequest> = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
