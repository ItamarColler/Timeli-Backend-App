import { Request, Response, NextFunction } from "express";
import { ERROR_TABLE } from "../consts";
import { JsonWebTokenError, verify, VerifyErrors } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../utils/envs";
import errorMessage from "../utils/error.message";

export const isAuthenticatedMW = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token || token.startsWith("Bearer "))
    return res.status(401).send(errorMessage(ERROR_TABLE.NO_TOKEN));

  const tokenWithoutBearer = token.split(" ")[1];

  verify(
    tokenWithoutBearer,
    ACCESS_TOKEN_SECRET,
    (err: VerifyErrors | null, id?: any) => {
      if (err)
        return res.status(403).send(errorMessage(ERROR_TABLE.AUTHENTICATION));

      req.id = id;
      next();
    }
  );
};

export const verifyRefreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const refreshToken = req.cookies?.["refreshToken"];

  if (!refreshToken)
    return res.status(401).send(errorMessage(ERROR_TABLE.NO_TOKEN));

  verify(
    refreshToken,
    REFRESH_TOKEN_SECRET,
    (err: VerifyErrors | null, id?: any) => {
      if (err)
        return res.status(403).send(errorMessage(ERROR_TABLE.AUTHENTICATION));

      req.id = id;
      next();
    }
  );
};
