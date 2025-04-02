import Joi from "joi";

export const missionSchema = Joi.object({
  title: Joi.string().max(40).required(),
  description: Joi.string().max(200),
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref("startDate")),
  finished: Joi.boolean().default(false),
});
