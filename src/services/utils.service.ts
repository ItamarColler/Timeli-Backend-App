import { IUser } from "./../interfaces/user.interface";
import userModel from "../models/user.schema.model";

export const findUserByEmail = async (user: IUser): Promise<IUser | null> => {
  const userData = await userModel.findOne({ email: user.email });
  return !userData ? null : userData;
};
