import Joi from "joi";

export const planSchema = Joi.object({
  startDate: Joi.date().required().required(),
  endDate: Joi.date().greater(Joi.ref("startDate")).required(),
  position: Joi.number().required(),
});
