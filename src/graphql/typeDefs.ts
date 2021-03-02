import { gql } from "apollo-server-express";

const typeDefs = gql`
  # task
  type Task {
    id: Int!
    name: String!
    description: String!
    completed: Boolean!
  }

  ## QUERY
  type Query {
    # task
    tasks: [Task!]!
    task(id: Int!): Task
    hello: String!
  }

  ## MUTATION
  type Mutation {
    # task
    addTask(name: String!, description: String!, completed: Boolean!): Task!
  }
`;

export default typeDefs;
