import { AppDataSource } from "../../data-source";
import Diagnostic from "../../entities/diagnostics.entity";
import { AppError } from "../../error";

const deleteDiagnosticService = async (diagnosticId: string) => {
  const diagnosticRepository = AppDataSource.getRepository(Diagnostic);

  const diagnostic = await diagnosticRepository.findOneBy({
    id: diagnosticId,
  });

  if (!diagnostic) {
    throw new AppError(404, "Diagnostic not found!");
  }

  await diagnosticRepository.delete({ id: diagnostic.id });
};

export default deleteDiagnosticService;
