import { IUser } from "./../interfaces/user.interface";
import userModel from "../models/user.schema.model";

export const findUserByEmail = async (user: IUser): Promise<boolean> => {
  const foundAUser = await userModel.findOne({ email: user.email });
  return foundAUser ? true : false;
};
