import { AppDataSource } from "../../data-source";
import Diagnostic from "../../entities/diagnostics.entity";

const listDiagnosticByIdService = async (diagnosticId: string) => {
  const diagnostic = await AppDataSource.createQueryBuilder()
    .select("diagnostic")
    .from(Diagnostic, "diagnostic")
    .where("diagnostic.id = :id_do_diagnostic", {
      id_do_diagnostic: diagnosticId,
    })
    .getOne();

  return diagnostic;
};

export default listDiagnosticByIdService;
