export interface ICreateExamRequest {
  name: string;
  date_solicitation: Date;
  status: boolean;
}

export interface ICreateExamResponse {
  id: string;
  name: string;
  date_solicitation: Date;
  status: boolean;
  date_apply: Date | null;
}

export interface IUpdateExamRequest {
  date_apply: Date;
  status: boolean;
}

export interface IUpdateExamResponse extends ICreateExamResponse {
  date_apply: Date;
}
