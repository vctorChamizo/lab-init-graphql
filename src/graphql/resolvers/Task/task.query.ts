import { ITask } from "@interfaces";
import { findTaskByIdService, findTasksService } from "../../../service";

export const findTasksQuery = async () => {
  try {
    const taskCollection: ITask[] = await findTasksService();
    return taskCollection;
  } catch (error) {
    throw error;
  }
};

export const findTaskByIdQuery = async (_: any, args: any) => {
  try {
    const { id } = args;
    const task: ITask | null = await findTaskByIdService(id);
    return task;
  } catch (error) {
    throw error;
  }
};
