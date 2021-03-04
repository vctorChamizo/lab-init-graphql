import { IUser, IUserData, IUserModel } from "@interfaces";
import { signUpIntegration, signInIntegration } from "../integration";
import { encryptPassword } from "../lib/hash";
import { generateJWT } from "../lib/jwt";

export const signUpService = async (
  username: string,
  email: string,
  password: string
): Promise<IUser> => {
  try {
    const normalizeEmail: string = String(email.trim().toLowerCase());
    const hashedPassword: string = await encryptPassword(password);

    const user: IUserData = {
      username,
      email: normalizeEmail,
      password: hashedPassword,
    };

    const resultUser: IUser = await signUpIntegration(user);
    const token: string = await generateJWT(resultUser.id);

    const newUser: IUser = {
      id: resultUser.id,
      username: resultUser.username,
      email: resultUser.email,
      token,
    };

    return newUser;
  } catch (error) {
    throw error;
  }
};

export const signInService = async (
  username: string,
  email: string,
  password: string
): Promise<string> => {
  return await "";
};
