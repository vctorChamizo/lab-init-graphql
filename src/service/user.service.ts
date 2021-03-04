import { IUserData, IUser, ITask } from "@interfaces";
import {
  addUserIntegration,
  findUsersIntegration,
  findUserByIdIntegration,
} from "../integration";

export const addUserService = async (
  username: string,
  email: string,
  avatar: string,
  notes: string[]
): Promise<IUser> => {
  try {
    const user: IUserData = { username, email, avatar, notes };
    return addUserIntegration(user);
  } catch (error) {
    throw error;
  }
};

export const findUsersService = async (): Promise<IUser[]> => {
  try {
    return findUsersIntegration();
  } catch (error) {
    throw error;
  }
};

export const findUserByIdService = async (
  id: string
): Promise<IUser | null> => {
  try {
    return findUserByIdIntegration(id);
  } catch (error) {
    throw error;
  }
};
