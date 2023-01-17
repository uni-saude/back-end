import * as yup from "yup";
import { SchemaOf } from "yup";
import { IVaccinesRequest } from "../../interfaces/vaccines.interface";

const vaccinesSerializer: SchemaOf<IVaccinesRequest> = yup.object().shape({
  name: yup.string().max(64).required(),
  date_apply: yup.date().required(),
  dose: yup.number().max(2).required(),
  next_dose: yup.date().notRequired(),
  patient: yup.number().required(),
});

export default vaccinesSerializer;
