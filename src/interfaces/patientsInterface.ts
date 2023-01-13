export interface IPatientExpressRequest {
  name: string;
  cpf: string;
  age: number;
  email: string;
  passoword: string;
  genre: string;
  phone: string;
  father: string;
  mother: string;
  blood_type: string;
  tutorId: string;
  addressId: string;
}

export interface IPatient {
  id: string;
  name: string;
  email: string;
  tutorId: string;
}
export interface IPatientSessionRequest{
  email: string;
  password: string;
}
export interface IPatientSession{
  token: string;
}