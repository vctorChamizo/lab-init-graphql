export enum AuthError {
  USER_EXISTS = "User already exists",
  BAD_CREDENTIALS = "User or password are incorrect.",
}

export enum ApolloCodeError {
  GRAPHQL_PARSE_FAILED = "GRAPHQL_PARSE_FAILED", // The GraphQL operation string contains a syntax error.
  GRAPHQL_VALIDATION_FAILED = "GRAPHQL_VALIDATION_FAILED", // The GraphQL operation is not valid against the server's schema.
  BAD_USER_INPUT = "BAD_USER_INPUT", // The GraphQL operation includes an invalid value for a field argument.
  UNAUTHENTICATED = "UNAUTHENTICATED", // The server failed to authenticate with a required data source, such as a REST API.
  FORBIDDEN = "FORBIDDEN", // The server was unauthorized to access a required data source, such as a REST API.
  PERSISTED_QUERY_NOT_FOUND = "PERSISTED_QUERY_NOT_FOUND", // A client sent the hash of a query string to execute via automatic persisted queries, but the query was not in the APQ cache.
  PERSISTED_QUERY_NOT_SUPPORTED = "PERSISTED_QUERY_NOT_SUPPORTED", // A client sent the hash of a query string to execute via automatic persisted queries, but the server has disabled APQ.
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}
