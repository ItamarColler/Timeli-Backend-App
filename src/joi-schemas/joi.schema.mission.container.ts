import Joi from "joi";
import { missionSchema } from "./joi.schema.mission";
import { planSchema } from "./joi.schema.plan";

export const missionContainerSchema = Joi.object({
  mission: Joi.object(missionSchema).required(),
  plans: Joi.array().items(planSchema),
});
