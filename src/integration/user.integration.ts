import { IUserModel } from "@interfaces";
import { UserModel } from "../db/models";

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
