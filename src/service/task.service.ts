import { ITaskData, ITask } from "@interfaces";
import {
  addTaskIntegration,
  findTasksIntegration,
  findTaskByIdIntegration,
} from "../integration";

export const addTaskService = async (
  name: string,
  description: string
): Promise<ITask> => {
  try {
    const task: ITaskData = { name, description };
    return addTaskIntegration(task);
  } catch (error) {
    throw error;
  }
};

export const findTasksService = async (): Promise<ITask[]> => {
  try {
    return findTasksIntegration();
  } catch (error) {
    throw error;
  }
};

export const findTaskByIdService = async (
  id: string
): Promise<ITask | null> => {
  try {
    return findTaskByIdIntegration(id);
  } catch (error) {
    throw error;
  }
};
