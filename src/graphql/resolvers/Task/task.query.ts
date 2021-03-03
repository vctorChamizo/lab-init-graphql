import { ITask } from "@interfaces";
import { taskCollection } from "../../../data/task";

export const tasks = (): ITask[] => taskCollection;

export const task = (_: any, args: any) =>
  taskCollection.find((task) => task.id == args.id);
