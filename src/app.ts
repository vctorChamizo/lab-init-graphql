import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

// import { resolvers } from "./graphql";

import { PORT, API_URL } from "@constants";

// const typeDefs = gql`
//   # task
//   type Task {
//     id: Int!
//     name: String!
//     description: String!
//     completed: Boolean!
//   }

//   ## QUERY
//   type Query {
//     # task
//     tasks: [Task]!
//     task(id: Int!): Task
//   }

//   ## MUTATION
//   type Mutation {
//     # task
//     addTask(name: String!, description: String!, completed: Boolean!): Task!
//   }
// `;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.applyMiddleware({ app, path: API_URL });

app.listen(PORT, () => {
  console.log(
    `GraphQL Server running at http://localhost:${PORT}${server.graphqlPath}`
  );
});
