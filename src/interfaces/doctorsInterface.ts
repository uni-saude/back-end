export interface ICreateDoctor {
  name: string;
  crm: string;
  email: string;
  password: string;
  specializationId: string;
}

export interface IDoctorResponse {
  name: string;
  crm: string;
  email: string;
  specialization: string;
}

export interface ILoginDoctorRequest {
  email: string;
  password: string;
}
