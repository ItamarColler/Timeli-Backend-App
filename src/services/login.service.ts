import { IUser } from "./../interfaces/user.interface";
import { compareInputs, findUserByEmail, hashInput } from "./utils.service";
import { ERROR_TABLE } from "../consts";
import ILogin from "../interfaces/login.interface";

export const loginService = async (loginData: ILogin): Promise<IUser> => {
  try {
    const userData = await findUserByEmail(hashInput(loginData.email));
    if (
      !userData ||
      !(await compareInputs(loginData.password, userData.password))
    ) {
      throw new Error(ERROR_TABLE.CREDENITALS);
    }
    return userData;
  } catch (error) {
    throw new Error(ERROR_TABLE.BCRYPT);
  }
};
