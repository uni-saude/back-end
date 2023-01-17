import * as yup from "yup"
import { SchemaOf } from "yup";
import { IPatient, IPatientSessionRequest } from "../../interfaces/patientsInterface";
import { ITutor, ITutorRequest } from "../../interfaces/tutorsInterface";

const patientDataRequestSchema:SchemaOf<any> = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    age: yup.number().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    genre: yup.string().required(),
    phone: yup.string().required(),
    father: yup.string(),
    mother: yup.string(),
    blood_type: yup.string().required(),
    tutorId: yup.string().required(),
    address: yup.object().shape({
        street: yup.string().required(),
        number: yup.number().required(),
        complement: yup.string().required(),
        district: yup.string().required(),
        zip_code: yup.number().required(),
        city: yup.string().required(),
        state: yup.string().required(),
    })
})

const patientSessionRequestSchema:SchemaOf<IPatientSessionRequest> = yup.object().shape({
    email: yup.string().required("email required field"),
    password: yup.string().required("password required field")
})

const patientDataWhiteoutSchema:SchemaOf<IPatient> = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string(),
    tutorId: yup.string(),
    addressId: yup.string()
})

const tutorDataRequestSchema:SchemaOf<ITutorRequest> = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    phone: yup.string().required()
})

const tutorDataWhiteoutSchema:SchemaOf<ITutor> = yup.object().shape({
    id: yup.string(),
    name: yup.string()
})

export {patientDataWhiteoutSchema,patientDataRequestSchema,tutorDataRequestSchema,tutorDataWhiteoutSchema,patientSessionRequestSchema};