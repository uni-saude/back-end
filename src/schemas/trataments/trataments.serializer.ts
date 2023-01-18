import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITratamentRequest } from "../../interfaces/trataments.interface";

export const tratamentSerializer: SchemaOf<ITratamentRequest> = yup
  .object()
  .shape({
    name: yup.string().max(80).required(),
    initial_date: yup.date(),
  });
