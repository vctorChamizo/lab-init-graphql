import express from "express";
import { ApolloServer } from "apollo-server-express";
import logger from "@log";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";
import * as database from "./db/connector";
import * as models from "./db/models";

import { PORT, API_URL } from "@constants";

const app = express();

database.connect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: () => {
    return { models };
  },
});

server.applyMiddleware({ app, path: API_URL });

app.listen(PORT, () => {
  logger.info(
    `GraphQL Server running at http://localhost:${PORT}${server.graphqlPath}`
  );
});
