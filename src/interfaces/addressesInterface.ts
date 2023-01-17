
export interface IAddressExpressRequest {
  id: string;
}

export interface IAddressRequest {
  street: string;
  number: number;
  complement: string;
  district: string;
  zip_code: number;
  city: string;
  state: string;
}

export interface IAddress {
    id: string;
    street: string;
    number: number;
    complement: string;
    district: string;
    zip_code: number;
    city: string;
    state: string;
}
