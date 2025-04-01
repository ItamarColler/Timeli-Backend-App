import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import errorMessage from "../utils/error.message";

export const schemaValidationMW =
  (schmea: Schema, fieldFrom: "body" | "query" | "params" = "body") =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schmea.validateAsync(req[fieldFrom]);
      next();
    } catch (error: any) {
      res
        .status(412)
        .send(errorMessage(`Invalid ${error["details"][0]["path"][0]} input`));
    }
  };
