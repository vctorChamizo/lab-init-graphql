import { GraphQLDateTime } from "graphql-iso-date";

import { addTaskMutation, findTasksQuery, findTaskByIdQuery } from "./task";
import { addUserMutation, findUsersQuery, findUserByIdQuery } from "./user";
import { signUp, signIn } from "./auth";

const Query = {
  // task
  findTasksQuery,
  findTaskByIdQuery,

  // user
  findUsersQuery,
  findUserByIdQuery,
};

const Mutation = {
  // auth
  signUp,
  signIn,

  // task
  addTaskMutation,

  // user
  addUserMutation,
};

const resolvers = { Query, Mutation, DateTime: GraphQLDateTime };

export default resolvers;
