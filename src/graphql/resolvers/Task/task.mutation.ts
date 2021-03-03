import { ITaskData } from "@interfaces";
import { TaskModel } from "../../../db/models";

export const addTask = async (_: any, args: any) => {
  try {
    const { name, description } = args;

    const task: ITaskData = {
      name: name,
      description: description,
    };

    return await new TaskModel(task).save();
  } catch (error) {
    throw error;
  }
};
