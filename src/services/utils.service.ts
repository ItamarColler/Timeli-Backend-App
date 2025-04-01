import { IUser } from "../interfaces/user.interface";
import userModel from "../models/user.schema.model";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { SALTROUNDS } from "../utils/envs";

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await userModel.findOne({ email: email });
};

export const bcryptInput = async (input: string): Promise<string> => {
  return await bcrypt.hash(input, SALTROUNDS);
};

export const hashInput = (input: string): string => {
  return crypto.createHash("sha256").update(input.trim()).digest("hex");
};

export const compareInputs = async (
  plainText: string,
  hashedText: string
): Promise<boolean> => {
  return await bcrypt.compare(plainText, hashedText);
};
