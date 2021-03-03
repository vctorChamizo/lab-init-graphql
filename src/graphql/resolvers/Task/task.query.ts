import { ITaskModel } from "@interfaces";
import { TaskModel } from "../../../db/models";

export const tasks = async (): Promise<ITaskModel[]> => {
  try {
    return await TaskModel.find();
  } catch (error) {
    throw error;
  }
};

export const task = async (_: any, args: any): Promise<ITaskModel | null> => {
  try {
    const { id } = args;

    return await TaskModel.findOne({ _id: id });
  } catch (error) {
    throw error;
  }
};
