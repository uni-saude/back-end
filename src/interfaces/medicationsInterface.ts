export interface IMedication{
    name: string;
    tratament: string;
    description: string;
}
export interface IMedicationRequest{
    name: string;
    tratament: string;
    initial_data: string;
    description: string;
    final_date: string;
    patient: string
}
export interface IMedicationUpdate{
    name?: string;
    tratament?: string;
    description?: string;
    final_date?: string;
}