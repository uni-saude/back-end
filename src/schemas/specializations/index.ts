import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICreateSpecializationRequest } from "../../interfaces/specializationsInterface";

export const createSpecializationSchema: SchemaOf<ICreateSpecializationRequest> =
  yup.object().shape({
    name: yup.string().min(3).max(120).trim().required(),
  });
