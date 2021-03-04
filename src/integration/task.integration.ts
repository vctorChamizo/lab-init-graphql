import { ITaskData, ITaskModel, ITask } from "@interfaces";
import { TaskModel } from "../db/models";

export const addTaskIntegration = async (
  task: ITaskData
): Promise<ITaskModel> => {
  try {
    return new TaskModel(task).save();
  } catch (error) {
    throw error;
  }
};

export const findTaskByIdIntegration = async (
  id: string
): Promise<ITaskModel | null> => {
  try {
    return TaskModel.findOne({ _id: id });
  } catch (error) {
    throw error;
  }
};

export const findTasksIntegration = async (): Promise<ITaskModel[]> => {
  try {
    return TaskModel.find();
  } catch (error) {
    throw error;
  }
};
