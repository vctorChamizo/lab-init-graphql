import { gql } from "apollo-server-express";

import taskTypeDef from "./task.type";
import authTypeDef from "./auth.type";
import userTypeDef from "./user.type";

const generalTypeDef = gql`
  # custom scalar type
  scalar DateTime

  ## QUERY
  type Query {
    statusQuery: String!
  }

  ## MUTATION
  type Mutation {
    statusMutation(username: String!): String!
  }
`;

const typeDefs = [authTypeDef, userTypeDef, taskTypeDef, generalTypeDef];

export default typeDefs;
