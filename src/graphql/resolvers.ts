const tasks: any[] = [];

const Query = {
  tasks: (parent: any, args: any, context: any) => tasks,
  task: (parent: any, args: any, context: any) => {
    const task = tasks.find((task) => task.id === args.id);
    return task;
  },
};

const Mutation = {
  addTask: (parent: any, args: any, context: any) => {
    const newTask = {
      id: tasks.length,
      name: args.name,
      description: args.description,
      completed: args.completed,
    };
    tasks.push(newTask);
    return newTask;
  },
};

const resolvers = { Query, Mutation };

export default resolvers;
