import { IResolvers } from "apollo-server-express";

import { addTaskMutation } from "./task.mutation";
import { findTasksQuery, findTaskByIdQuery } from "./task.query";

import { ITask } from "@interfaces";

const status = (task: ITask): string => {
  return `Name: ${task.name} - Status: ${
    task.completed ? "Completada" : "Incompleta"
  }`;
};

export const taskResolver: IResolvers = {
  Query: { findTasksQuery, findTaskByIdQuery },
  Mutation: { addTaskMutation },
  Task: { status },
};
