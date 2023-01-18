import { AppDataSource } from "../../data-source";
import Diagnostic from "../../entities/diagnostics.entity";
import Patient from "../../entities/patientsEntity";
import { AppError } from "../../error";
import { IDiagnosticRequest } from "../../interfaces/diagnosticInterface";
import { diagnosticResponseSerializer } from "../../schemas/diagnostics";

const createDiagnosticService = async (
  diagnosticData: IDiagnosticRequest,
  idPatient: string
) => {
  const diagnosticRepository = AppDataSource.getRepository(Diagnostic);
  const patientRepository = AppDataSource.getRepository(Patient);

  const patient = await patientRepository.findOneBy({ id: idPatient });

  if (!patient) {
    throw new AppError(404, "Patient not found");
  }

  const createdDiagnostic = diagnosticRepository.create(diagnosticData);
  createdDiagnostic.patient = patient;
  await diagnosticRepository.save(createdDiagnostic);

  const diagnosticReturned = await diagnosticResponseSerializer.validate(
    createdDiagnostic,
    {
      stripUnknown: true,
    }
  );

  return diagnosticReturned;
};

export default createDiagnosticService;
