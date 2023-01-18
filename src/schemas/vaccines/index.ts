import * as yup from "yup";
import { SchemaOf } from "yup";
import { IVaccinesRequest } from "../../interfaces/vaccines.interface";

const vaccinesSerializerReponse: SchemaOf<IVaccinesRequest> = yup
  .object()
  .shape({
    next_dose: yup.mixed(),
    date_apply: yup.date(),
    dose: yup.number(),
    name: yup.string(),
    id: yup.string(),
  });

export default vaccinesSerializerReponse;
