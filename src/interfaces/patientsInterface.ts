import { AdressObjectList } from "./addressesInterface";

export interface IPatientExpressRequest {
  name: string;
  cpf: string;
  age: number;
  email: string;
  password: string;
  genre: string;
  phone: string;
  father: string;
  mother: string;
  blood_type: string;
  tutorId: string;
  address: AdressObjectList[];
}

export interface IPatient {
  id: string;
  name: string;
  email: string;
  tutorId: string;
  addressId: string;
}
export interface IPatientSessionRequest{
  email: string;
  password: string;
}
export interface IPatientSession{
  token: string;
}
export interface IPatientUpdate{
  name?: string;
  cpf?: string;
  age?: number;
  email?: string;
  password?: string;
  genre?: string;
  phone?: string;
  father?: string;
  mother?: string;
  blood_type?: string;
  tutorId?: string;
  addressId?: string;
}