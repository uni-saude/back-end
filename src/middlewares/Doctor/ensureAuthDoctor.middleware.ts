import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { AppError } from "../../error";

export const ensureAuthDoctorMiddleware = async (
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
      throw new AppError(401, err.message);
    }

    req.doctor = {
      id: String(decoded.sub),
    };
    return next();
  });
};
