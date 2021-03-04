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
    notes: [String!]
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
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!

    # task
    addTaskMutation(
      name: String!
      description: String!
      completed: Boolean
    ): Task!

    # user
    addUserMutation(
      username: String!
      email: String!
      avatar: String
      notes: [String!]
    ): User!
  }
`;

export default typeDefs;
