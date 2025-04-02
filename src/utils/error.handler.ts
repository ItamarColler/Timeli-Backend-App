import { Request, Response, NextFunction } from "express";
import { ERROR_TABLE } from "../consts";
import errorMessage from "./error.message";

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(`Error stack: ${err.stack}`);
  switch (err.message) {
    case ERROR_TABLE.NO_TOKEN:
      res.status(401).send(errorMessage(ERROR_TABLE.NO_TOKEN));
      break;
    case ERROR_TABLE.AUTHENTICATION:
      res.status(403).send(errorMessage(ERROR_TABLE.AUTHENTICATION));
      break;
    case ERROR_TABLE.EMAIL:
      res.status(409).send(errorMessage(ERROR_TABLE.EMAIL));
      break;
    case ERROR_TABLE.BCRYPT:
      res.status(412).send(errorMessage(ERROR_TABLE.BCRYPT));
      break;
    default:
      res.status(500).send(errorMessage(err.message));
      break;
  }
};

export default errorHandler;
