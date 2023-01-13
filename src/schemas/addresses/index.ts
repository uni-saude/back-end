import * as yup from "yup"
import { SchemaOf } from "yup";
import { IAddressRequest } from "../../interfaces/addressesInterface";

const addressDataRequestSerializer:SchemaOf<IAddressRequest> = yup.object().shape({
    street: yup.string().required(),
    number: yup.number().required(),
    complement: yup.string().required(),
    district: yup.string().required(),
    zip_code: yup.number().required(),
    city: yup.string().required(),
    state: yup.string().required(),
})
export {addressDataRequestSerializer};