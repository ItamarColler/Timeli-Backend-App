import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email().required().strict(),
  password: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/)
    .min(8)
    .strict()
    .required(),
});
