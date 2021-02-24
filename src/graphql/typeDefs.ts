import { gql } from "apollo-server";

const typeDefs = gql`
  type Task {
    id: Int!
    name: String!
    description: String!
    completed: Boolean!
  }

  type Query {
    tasks: [Task]!
    task(id: Int!): Task
  }

  type Mutation {
    addTask(name: String!, description: String!, completed: Boolean!): Task!
  }
`;

export default typeDefs;
