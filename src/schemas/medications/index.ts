import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IMedication,
  IMedicationResponse,
} from "../../interfaces/medicationsInterface";

const medicationBodySchema: SchemaOf<IMedication> = yup.object().shape({
  name: yup.string().required(),
  tratament: yup.string().required(),
  initial_date: yup.date().required(),
  description: yup.string().required(),
  final_date: yup.date().required(),
});

const medicationResponseSchema: SchemaOf<IMedicationResponse> = yup
  .object()
  .shape({
    final_date: yup.date(),
    initial_date: yup.date(),
    description: yup.string(),
    tratament: yup.string(),
    name: yup.string(),
    id: yup.string(),
  });

export { medicationBodySchema, medicationResponseSchema };
