import { ITask } from "@interfaces";
import { addTaskService } from "../../../service";

export const addTaskMutation = async (_: any, args: any) => {
  const { name, description }: { name: string; description: string } = args;
  const newTask: ITask = await addTaskService(name, description);
  return newTask;
};
