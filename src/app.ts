import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import logger from "@log";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/types";
import * as database from "./db/connector";
import context from "./context";

import { API_HOST, PORT, API_URL } from "@constants";

const app = express();

database.connect();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  playground: true,
  context,
});

server.applyMiddleware({ app, path: API_URL });

app.listen(PORT, () => {
  logger.info(
    `GraphQL Server running at ${API_HOST}:${PORT}${server.graphqlPath}`
  );
});
