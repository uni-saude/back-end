import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ICreateExamRequest,
  ICreateExamResponse,
  IUpdateExamRequest,
} from "../../interfaces/examsInterface";

export const createExamSchema: SchemaOf<ICreateExamRequest> = yup
  .object()
  .shape({
    name: yup.string().min(1).max(64).trim().required(),
    date_solicitation: yup.date().required(),
    status: yup.boolean().required(),
  });

export const createExamResponseSchema: SchemaOf<ICreateExamResponse> = yup
  .object()
  .shape({
    date_apply: yup.mixed(),
    status: yup.boolean(),
    date_solicitation: yup.date(),
    name: yup.string(),
    id: yup.string(),
  });

export const markDoneExamRequestSchema: SchemaOf<IUpdateExamRequest> = yup
  .object()
  .shape({
    date_apply: yup.date().required(),
    status: yup.boolean().required(),
  });
