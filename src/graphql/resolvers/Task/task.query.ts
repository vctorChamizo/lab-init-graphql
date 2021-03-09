import { AuthenticationError } from "apollo-server-express";

import { findTaskByIdService, findTasksService } from "../../../service";

import { ITask, IUserContext } from "@interfaces";
import { NO_AUTHORIZATION } from "@constants";

export const findTasksQuery = async (
  _: undefined,
  __: undefined,
  { user }: { user: IUserContext }
): Promise<ITask[]> => {
  try {
    if (!user) throw new AuthenticationError(NO_AUTHORIZATION);
    return await findTasksService();
  } catch (error) {
    throw error;
  }
};

export const findTaskByIdQuery = async (
  _: any,
  { id }: { id: string },
  { user }: { user: IUserContext }
): Promise<ITask | null> => {
  try {
    if (!user) throw new AuthenticationError(NO_AUTHORIZATION);
    return await findTaskByIdService(id);
  } catch (error) {
    throw error;
  }
};
