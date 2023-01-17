import { AppDataSource } from "../../data-source";
import Diagnostic from "../../entities/diagnostics.entity";
import { AppError } from "../../error";
import { IDiagnosticRequest } from "../../interfaces/diagnosticInterface";
import { diagnosticResponseSerializer } from "../../schemas/diagnostics";

const createDiagnosticService = async (diagnosticData: IDiagnosticRequest) => {
  const diagnosticRepository = AppDataSource.getRepository(Diagnostic);

  const diagnostic = await diagnosticRepository.findOneBy({
    name: diagnosticData.name,
  });

  if (diagnostic) {
    throw new AppError(409, "Diagnostic not found!");
  }

  const createdDiagnostic = diagnosticRepository.create(diagnosticData);
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
