import { GraphQLDateTime } from "graphql-iso-date";

import { addTaskMutation, findTasksQuery, findTaskByIdQuery } from "./task";
import { findUsersQuery, findUserByIdQuery } from "./user";
import { signUpMutation, signInMutation } from "./auth";

const Query = {
  // auth
  signInMutation,

  // task
  findTasksQuery,
  findTaskByIdQuery,

  // user
  findUsersQuery,
  findUserByIdQuery,
};

const Mutation = {
  // auth
  signUpMutation,

  // task
  addTaskMutation,
};

const resolvers = { Query, Mutation, DateTime: GraphQLDateTime };

export default resolvers;
