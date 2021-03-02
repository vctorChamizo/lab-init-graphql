import { ITask } from "@interfaces";

import { taskCollection } from "../../../data/task";

export const addTask = (_: any, args: any) => {
  const { name, description, completed } = args;

  const newTask: ITask = {
    id: taskCollection.length + 1,
    name: name,
    description: description,
    completed: completed,
  };

  taskCollection.push(newTask); // In a real enviroment -> provision database

  return newTask;
};
