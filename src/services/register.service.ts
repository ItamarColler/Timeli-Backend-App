import { IUser } from "./../interfaces/user.interface";
import { findUserByEmail } from "./utils.service";
import userModel from "../models/user.schema.model";
import { ERROR_TABLE } from "../consts";

export const registerUserService = async (
  user: IUser
): Promise<IUser | Error> => {
  const userExists = await findUserByEmail(user);
  if (userExists) {
    throw new Error(ERROR_TABLE.EMAIL);
  } else {
    const userData = await userModel.create(user);
    return userData;
  }
};
