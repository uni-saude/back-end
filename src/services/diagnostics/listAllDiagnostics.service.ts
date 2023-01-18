import { AppDataSource } from "../../data-source";
import Diagnostic from "../../entities/diagnostics.entity";

const listAllDiagnosticsService = async (idPatient: string) => {
  const diagnosticsRepository = AppDataSource.getRepository(Diagnostic);
  const diagnosticsQueryBuilder = diagnosticsRepository.createQueryBuilder("d");

  const diagnostics = await diagnosticsQueryBuilder
    .leftJoin("d.patient", "p")
    .where("p.id = :idPatient", { idPatient })
    .getMany();

  return diagnostics;
};

export default listAllDiagnosticsService;
