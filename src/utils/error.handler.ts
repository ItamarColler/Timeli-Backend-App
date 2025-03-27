import { Request, Response, NextFunction } from "express";
import { ERROR_TABLE } from "../consts";

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  switch (err.message) {
    case ERROR_TABLE.EMAIL:
      res.status(409).send({ error: ERROR_TABLE.EMAIL });
      break;
    default:
      res.status(500).send({ error: err.message });
      break;
  }
};

export default errorHandler;
