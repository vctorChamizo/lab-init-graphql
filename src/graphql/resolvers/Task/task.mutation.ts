import { AuthenticationError } from "apollo-server-express";

import { addTaskService } from "../../../service";

import { ITask, IUserContext } from "@interfaces";
import { NO_AUTHORIZATION } from "@constants";

export const addTaskMutation = async (
  _: any,
  { name, description }: { name: string; description: string },
  { user }: { user: IUserContext }
): Promise<ITask> => {
  if (!user) throw new AuthenticationError(NO_AUTHORIZATION);
  return await addTaskService(name, description);
};
