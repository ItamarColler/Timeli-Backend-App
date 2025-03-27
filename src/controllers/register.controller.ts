import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/user.interface";
import { registerUserService } from "../services/register.service";

export const registerUserCtrl = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const registerParams = {
    password: req.body.password,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  } as IUser;
  try {
    const userData = await registerUserService(registerParams);
    res.send(JSON.stringify(userData)).status(200);
  } catch (error) {
    _next(error);
  }
};
