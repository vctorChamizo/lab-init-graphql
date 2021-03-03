import { gql } from "apollo-server-express";

const typeDefs = gql`
  # task
  type Task {
    id: ID!
    name: String!
    description: String!
    completed: Boolean
  }

  ## QUERY
  type Query {
    # task
    tasks: [Task!]!
    task(id: ID!): Task
  }

  ## MUTATION
  type Mutation {
    # task
    addTask(name: String!, description: String!, completed: Boolean): Task!
  }
`;

export default typeDefs;
