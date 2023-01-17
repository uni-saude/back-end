import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IDiagnosticRequest,
  IDiagnosticResponse,
  IDiagnosticUpdate,
} from "../../interfaces/diagnosticInterface";

export const diagnosticSerializer: SchemaOf<IDiagnosticRequest> = yup
  .object()
  .shape({
    name: yup.string().max(80).required(),
    tratament: yup.string().max(120).required(),
  });

export const diagnosticResponseSerializer: SchemaOf<IDiagnosticResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    name: yup.string().required(),
    tratament: yup.string().required(),
  });

export const diagnosticUpdateSerializer: SchemaOf<IDiagnosticUpdate> = yup
  .object()
  .shape({
    name: yup.string().max(80).notRequired(),
    tratament: yup.string().max(120).notRequired(),
  });
