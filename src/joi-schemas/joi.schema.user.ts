import Joi from "joi";

export const userSchema = Joi.object({
  email: Joi.string().email().required().strict(),
  password: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/)
    .min(8)
    .strict()
    .required(),
  firstname: Joi.string().min(2).required().strict(),
  lastname: Joi.string().min(2).required().strict(),
});
