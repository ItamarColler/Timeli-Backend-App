import { Request, Response, NextFunction } from "express";
import { loginService } from "../services/login.service";
import {
  refreshTokenUserService,
  signTokenUserService,
} from "../services/authentication.service";
import { NODE_ENV } from "../utils/envs";
import ILogin from "../interfaces/login.interface";

const WEEK = 7 * 24 * 60 * 60 * 1000;

export const loginUserCtrl = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const loginParams = req.body as ILogin;
  try {
    const loginData = await loginService(loginParams);
    const accessToken = signTokenUserService(loginData._id);
    const refreshToken = refreshTokenUserService(loginData._id);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "strict",
      maxAge: WEEK,
    });
    res.status(200).json({ accessToken });
  } catch (error) {
    _next(error);
  }
};
