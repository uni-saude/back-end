import { AppDataSource } from "../../data-source";
import Diagnostic from "../../entities/diagnostics.entity";
import { AppError } from "../../error";
import { IDiagnosticUpdate } from "../../interfaces/diagnosticInterface";
import { diagnosticUpdateSerializer } from "../../schemas/diagnostics";

const updateDiagnosticService = async (
  diagnosticData: IDiagnosticUpdate,
  diagnosticId: string
) => {
  const diagnosticRepository = AppDataSource.getRepository(Diagnostic);

  const findDiagnostic = await diagnosticRepository.findOneBy({
    id: diagnosticId,
  });

  const diagnostic = await diagnosticRepository.findOneBy({
    id: diagnosticId,
  });

  if (!diagnostic) {
    throw new AppError(404, "Diagnostic not found!");
  }

  const updateDiagnostic = diagnosticRepository.create({
    ...findDiagnostic,
    ...diagnosticData,
  });

  await diagnosticRepository.save(updateDiagnostic);

  const diagnosticReturned = await diagnosticUpdateSerializer.validate(
    updateDiagnostic,
    {
      stripUnknown: true,
    }
  );

  return diagnosticReturned;
};

export default updateDiagnosticService;
