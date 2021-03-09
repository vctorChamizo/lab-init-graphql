import { Request } from "express";

import { authContext } from "./auth.context";

import { IUser, IContext, IUserContext } from "@interfaces";

const handleContext = async ({
  req,
}: {
  req: Request;
}): Promise<IContext | unknown> => {
  let context = {};

  const token: string | undefined = req.headers.authorization;

  if (token) {
    const userSession: IUser | null = await authContext(token);

    const user: IUserContext | null = userSession && {
      id: userSession?.id,
      username: userSession?.username,
      email: userSession?.email,
      token,
    };

    context = {
      ...context,
      user,
    };
  }

  return context;
};

export default handleContext;
