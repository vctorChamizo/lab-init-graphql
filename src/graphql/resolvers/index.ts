import { GraphQLDateTime } from "graphql-iso-date";

import { addTask, tasks, task } from "./Task";

const Query = {
  // task
  tasks,
  task,
};

const Mutation = {
  // task
  addTask,
};

const resolvers = { Query, Mutation, DateTime: GraphQLDateTime };

export default resolvers;
