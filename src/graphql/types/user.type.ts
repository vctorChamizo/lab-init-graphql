import { gql } from "apollo-server-express";

const userTypeDef = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    token: String!
  }

  extend type Query {
    findUsersQuery: [User!]!
    findUserByIdQuery(id: ID!): User
  }
`;

export default userTypeDef;
