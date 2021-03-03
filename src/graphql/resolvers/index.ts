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

const resolvers = { Query, Mutation };

export default resolvers;
