import { AuthenticationError } from "apollo-server-express";

import { AuthError } from "@enums";
import { IUser, IUserAuth } from "@interfaces";
import {
  signUpIntegration,
  signInIntegration,
  findUserByIdIntegration,
} from "../integration";
import { encryptPassword, comparePassword } from "../lib/hash";
import { generateJWT, validateJWT } from "../lib/jwt";

export const signUpService = async (
  username: string,
  email: string,
  password: string
): Promise<IUser> => {
  try {
    const hashedPassword: string = encryptPassword(password);

    const user: IUserAuth = {
      username,
      email: email.trim().toLowerCase(),
      password: hashedPassword,
    };

    const resultUser: IUser = await signUpIntegration(user);
    const token: string = await generateJWT(resultUser.id);

    const newUser: IUser = {
      id: resultUser.id,
      username: resultUser.username,
      email: resultUser.email,
      password: resultUser.password,
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
  email = email?.trim().toLowerCase();
  password = password?.trim().toLowerCase();

  const user: IUser | null = await signInIntegration(email, username);

  if (!user) {
    throw new AuthenticationError(AuthError.BAD_CREDENTIALS);
  }

  const isValidatePassword = comparePassword(password, user.password);

  if (!isValidatePassword) {
    throw new AuthenticationError(AuthError.BAD_CREDENTIALS);
  }

  return await generateJWT(user.id);
};

export const getUserIdByToken = async (
  token: string
): Promise<IUser | null> => {
  const { id }: { id: string } = await validateJWT(token);

  return await findUserByIdIntegration(id);
};
