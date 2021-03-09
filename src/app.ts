import express from "express";
import helmet from "helmet";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/types";
import * as database from "./db/connector";
import context from "./context";
import formatError from "./errors";

import logger from "@log";
import { NODE_ENV, API_HOST, PORT, API_URL } from "@constants";
import { Enviroments } from "@enums";

const app = express();

app.use(helmet());

database.connect();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  playground: true,
  debug: NODE_ENV == Enviroments.SANDBOX,
  context,
  formatError,
});

server.applyMiddleware({ app, path: API_URL });

app.listen(PORT, () => {
  logger.info(
    `GraphQL Server running at ${API_HOST}:${PORT}${server.graphqlPath}`
  );
});
