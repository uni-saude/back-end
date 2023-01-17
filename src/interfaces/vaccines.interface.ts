export interface IVaccinesRequest {
  name: string;
  date_apply: Date;
  dose: number;
  next_dose?: Date;
}
