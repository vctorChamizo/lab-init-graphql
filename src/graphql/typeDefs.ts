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
    password: String!
    token: String!
  }

  ## QUERY
  type Query {
    # task
    findTasksQuery: [Task!]!
    findTaskByIdQuery(id: ID!): Task

    # user
    findUsersQuery: [User!]!
    findUserByIdQuery(id: ID!): User
  }

  ## MUTATION
  type Mutation {
    #auth
    signUpMutation(username: String!, email: String!, password: String!): User
    signInMutation(username: String, email: String, password: String!): String

    # task
    addTaskMutation(
      name: String!
      description: String!
      completed: Boolean
    ): Task!
  }
`;

export default typeDefs;
