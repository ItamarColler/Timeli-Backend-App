import express from "express";
import { registerUserCtrl } from "../controllers";
import { schemaValidationMW } from "../middlewares/joi.validation.middleware";
import { userSchema } from "../joi-schemas/joi.schema.user";

const router = express.Router();

router.post("/", schemaValidationMW(userSchema, "body"), registerUserCtrl);

export default router;
