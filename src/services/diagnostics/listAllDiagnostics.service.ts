import { AppDataSource } from "../../data-source";
import Diagnostic from "../../entities/diagnostics.entity";

const listAllDiagnosticsService = async () => {
  const diagnosticsRepository = AppDataSource.getRepository(Diagnostic);

  const diagnostics = await diagnosticsRepository.find();

  return diagnostics;
};

export default listAllDiagnosticsService;
