import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { AppError } from "../../error";

export const ensureAuthPatientMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken: string = req.headers.authorization;

  if (!authToken) {
    throw new AppError(401, "Missing header authorization");
  }

  const token: string = authToken.split(" ")[1];

  return jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: err.message });
    }

    console.log(decoded);

    req.patient = {
      id: String(decoded.sub),
    };

    return next();
  });
};
