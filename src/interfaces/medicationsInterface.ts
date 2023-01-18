export interface IMedication {
  name: string;
  tratament: string;
  initial_date: Date;
  description: string;
  final_date: Date;
}

export interface IMedicationUpdate {
  name?: string;
  tratament?: string;
  description?: string;
  final_date?: string;
}

export interface IMedicationResponse extends IMedication {
  id: string;
}
export interface IMedicationsList extends Array<IMedication> {}
