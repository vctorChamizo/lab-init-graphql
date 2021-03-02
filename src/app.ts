import express from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

import { PORT, API_URL } from "@constants";

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