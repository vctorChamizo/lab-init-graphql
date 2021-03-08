import { GraphQLError } from "graphql";

import sentryLauncher from "../lib/sentry";

const handleError = (error: GraphQLError) => {
  // handle errors
  sentryLauncher(error);
  return error;
};

export default handleError;
