import { IUser } from "@interfaces";
import { authContext } from "./auth.context";

const handleContext = async ({ req }: { req: any }) => {
  let context = {};

  const token: string | undefined = req.headers.authorization;

  if (token) {
    const user: IUser | null | undefined = await authContext(token);

    if (user) {
      context = { ...context, user };
    }
  }

  console.log(context);

  return context;
};

export default handleContext;
