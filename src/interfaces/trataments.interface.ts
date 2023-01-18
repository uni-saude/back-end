export interface ITratamentRequest {
  name: string;
  initial_date?: Date;
}

export interface ITratamentUpdateRequest {
  final_date: Date;
}
