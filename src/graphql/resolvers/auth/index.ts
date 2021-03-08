import { IResolvers } from "apollo-server-express";

import { signUpMutation } from "./auth.mutation";
import { signInMutation } from "./auth.query";

export const authResolver: IResolvers = {
  Query: { signInMutation },
  Mutation: { signUpMutation },
};
