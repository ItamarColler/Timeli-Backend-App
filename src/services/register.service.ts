import { IUser } from "./../interfaces/user.interface";
import { findUserByEmail, bcryptInput, hashInput } from "./utils.service";
import userModel from "../models/user.schema.model";
import { ERROR_TABLE } from "../consts";

export const registerUserService = async (user: IUser) => {
  const userExists = await findUserByEmail(hashInput(user.email));
  if (userExists) {
    throw new Error(ERROR_TABLE.EMAIL);
  } else {
    try {
      user.password = await bcryptInput(user.password);
      user.email = hashInput(user.email);
      const userData = await userModel.create(user);
      await userData.save();
    } catch (error) {
      throw new Error(ERROR_TABLE.BCRYPT);
    }
  }
};
