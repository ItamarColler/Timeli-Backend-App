import { sign } from "jsonwebtoken";

import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../utils/envs";

export const signTokenUserService = (userId: string): string => {
  return sign({ userId }, ACCESS_TOKEN_SECRET, { expiresIn: "3Hrs" });
};

export const refreshTokenUserService = (userId: string): string => {
  return sign({ userId }, REFRESH_TOKEN_SECRET, { expiresIn: "3Hrs" });
};
