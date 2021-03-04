import { IUserData, IUserModel, IUser } from "@interfaces";
import { UserModel } from "../db/models";

export const addUserIntegration = async (
  user: IUserData
): Promise<IUserModel> => {
  try {
    return new UserModel(user).save();
  } catch (error) {
    throw error;
  }
};

export const findUserByIdIntegration = async (
  id: string
): Promise<IUserModel | null> => {
  try {
    return UserModel.findOne({ _id: id });
  } catch (error) {
    throw error;
  }
};

export const findUsersIntegration = async (): Promise<IUserModel[]> => {
  try {
    return UserModel.find();
  } catch (error) {
    throw error;
  }
};