import * as yup from "yup"
import { SchemaOf } from "yup";
import { IPatient, IPatientExpressRequest } from "../../interfaces/patientsInterface";
import { ITutor, ITutorRequest } from "../../interfaces/tutorsInterface";

const patientDataRequestSerializer:SchemaOf<IPatientExpressRequest> = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    age: yup.number().required(),
    email: yup.string().required(),
    passoword: yup.string().required(),
    genre: yup.string().required(),
    phone: yup.string().required(),
    father: yup.string(),
    mother: yup.string(),
    blood_type: yup.string().required(),
    tutorId: yup.string().required(),
    addressId: yup.string().required()
})

const patientDataWhiteout:SchemaOf<IPatient> = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string(),
    tutorId: yup.string(),
})

const tutorDataRequestSerializer:SchemaOf<ITutorRequest> = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    phone: yup.string().required()
})

const tutorDataWhiteoutSerializer:SchemaOf<ITutor> = yup.object().shape({
    id: yup.string(),
    name: yup.string()
})

export {patientDataWhiteout,patientDataRequestSerializer,tutorDataRequestSerializer,tutorDataWhiteoutSerializer};