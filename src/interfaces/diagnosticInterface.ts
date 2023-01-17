export interface IDiagnosticRequest {
  name: string;
  tratament: string;
}

export interface IDiagnosticResponse {
  id: string;
  name: string;
  tratament: string;
}

export interface IDiagnosticUpdate {
  name?: string;
  tratament?: string;
}
