import * as yup from "yup"
import { SchemaOf } from "yup";
import { IMedication } from "../../interfaces/medicationsInterface";

const medicationBodySchema:SchemaOf<IMedication> = yup.object().shape({
    name: yup.string().required(),
    tratament: yup.string().required(),
    initial_date: yup.date().required(),
    description: yup.string().required(),
    final_date: yup.date().required(),
    patient: yup.string().required(),
})

export {medicationBodySchema}