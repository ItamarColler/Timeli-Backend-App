import express from "express";
import { schemaValidationMW } from "../middlewares/joi.validation.middleware";
import { loginSchema } from "../joi-schemas/joi.schema.login";
import { loginUserCtrl } from "../controllers/login.controller";

const router = express.Router();

router.post("/", schemaValidationMW(loginSchema, "body"), loginUserCtrl);

export default router;
