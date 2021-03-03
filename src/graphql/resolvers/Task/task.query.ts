import { TaskModel } from "../../../db/models";

export const tasks = async () => {
  try {
    return await TaskModel.find();
  } catch (error) {
    throw error;
  }
};

export const task = async (_: any, args: any) => {
  try {
    return await TaskModel.findOne({ _id: args.id });
  } catch (error) {
    throw error;
  }
};
