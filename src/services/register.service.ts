import { IUser } from "./../interfaces/user.interface";
import { findUserByEmail } from "./utils.service";
import userModel from "../models/user.schema.model";

export const registerUserService = async (
  user: IUser
): Promise<IUser | Error> => {
  const userExists = await findUserByEmail(user);
  if (userExists) return new Error("Email already exists ");
  else {
    const userData = await userModel.create(user);
    return userData;
  }
};
