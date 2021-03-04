import { IUserData, IUser } from "@interfaces";
import { UserModel } from "../db/models";

export const signUpIntegration = async (user: IUserData): Promise<IUser> => {
  try {
    return new UserModel(user).save();
  } catch (error) {
    throw error;
  }
};

export const signInIntegration = async () => {};
