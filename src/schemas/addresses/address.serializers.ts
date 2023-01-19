import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressRequest } from "../../interfaces/addressesInterface";

const addressSerializer: SchemaOf<IAddressRequest> = yup.object().shape({
  street: yup.string().max(42).required(),
  number: yup.number().required(),
  complement: yup.string(),
  district: yup.string().max(42).required(),
  zip_code: yup.number().required(),
  city: yup.string().max(42).required(),
  state: yup.string().max(2).required(),
});

export { addressSerializer };
