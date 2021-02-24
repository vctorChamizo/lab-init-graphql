import { ApolloServer } from "apollo-server";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.listen().then(() => {
  console.log("Running: <http://localhost:4000/grapqhql>");
});
