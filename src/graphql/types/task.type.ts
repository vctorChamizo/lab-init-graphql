import { gql } from "apollo-server-express";

const taskTypeDef = gql`
  type Task {
    id: ID!
    name: String!
    description: String!
    completed: Boolean
    createdAt: DateTime!
    status: String
  }

  extend type Query {
    findTasksQuery: [Task!]!
    findTaskByIdQuery(id: ID!): Task
  }

  extend type Mutation {
    addTaskMutation(
      name: String!
      description: String!
      completed: Boolean
    ): Task!
  }
`;

export default taskTypeDef;
