import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IPatient,
  IPatientExpressRequest,
  IPatientSessionRequest,
} from "../../interfaces/patientsInterface";
import { ITutor, ITutorRequest } from "../../interfaces/tutorsInterface";

const patientDataRequestSchema: SchemaOf<IPatientExpressRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    age: yup.number().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    genre: yup.string().required(),
    phone: yup.string().required(),
    father: yup.string().required(),
    mother: yup.string().required(),
    blood_type: yup.string().required(),
    tutorId: yup.string(),
    addressId: yup.string().required(),
  });

const patientSessionRequestSchema: SchemaOf<IPatientSessionRequest> = yup
  .object()
  .shape({
    email: yup.string().required("email required field"),
    password: yup.string().required("password required field"),
  });

const patientDataWhiteoutSchema: SchemaOf<IPatient> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string(),
  tutorId: yup.string(),
});

const tutorDataRequestSchema: SchemaOf<ITutorRequest> = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
});

const tutorDataWhiteoutSchema: SchemaOf<ITutor> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
});

export {
  patientDataWhiteoutSchema,
  patientDataRequestSchema,
  tutorDataRequestSchema,
  tutorDataWhiteoutSchema,
  patientSessionRequestSchema,
};
