import * as yup from "yup";
import { SchemaOf } from "yup";
import { AppError } from "../../error";
import { ICreateExamRequest } from "../../interfaces/examsInterface";

export const createExamSchema: SchemaOf<ICreateExamRequest> = yup
  .object()
  .shape({
    name: yup.string().min(1).max(64).trim().required(),
    date_solicitation: yup.date().required(),
    is_done: yup
      .boolean()
      .test({
        test: (value) => {
          if (value == false) return false;
          throw new AppError(409, "User must mark exam completed");
        },
      })
      .required(),
  });
