import Joi from "joi";

export const userValidationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});


export default userValidationSchema