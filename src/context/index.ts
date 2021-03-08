import { Request } from "express";

import { IUser, IContext } from "@interfaces";
import { authContext } from "./auth.context";

const handleContext = async ({
  req,
}: {
  req: Request;
}): Promise<IContext | unknown> => {
  let context = {};

  const token: string | undefined = req.headers.authorization;

  if (token) {
    const user: IUser | null = await authContext(token);

    context = { ...context, user };
  }

  return context;
};

export default handleContext;
