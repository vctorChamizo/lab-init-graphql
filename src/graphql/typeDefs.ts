import { gql } from "apollo-server-express";

const typeDefs = gql`
  # custom scalar type
  scalar DateTime

  # task
  type Task {
    id: ID!
    name: String!
    description: String!
    completed: Boolean
    createdAt: DateTime!
  }

  # user
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: [Task!]
  }

  ## QUERY
  type Query {
    # task
    tasks: [Task!]!
    task(id: ID!): Task

    # user
    users: [Task!]!
    user(id: ID!): Task
  }

  ## MUTATION
  type Mutation {
    #auth
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!

    # task
    addTask(name: String!, description: String!, completed: Boolean): Task!

    # user
    addUser(
      username: String!
      email: String!
      avatar: String
      notes: [Task!]
    ): User!
  }
`;

export default typeDefs;
