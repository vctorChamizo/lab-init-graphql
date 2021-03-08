import * as sentry from "@sentry/node";
import { GraphQLError } from "graphql";

import { SENTRY_DSN } from "@constants";

sentry.init({ dsn: SENTRY_DSN });

const sentryLauncher = (error: GraphQLError) => {
  sentry.withScope((scope) => {
    const { extensions, path, message } = error;
    if (extensions?.code) {
      scope.setTag("kind", extensions.code);
    }
    if (path && path?.length > 0) {
      scope.setExtra("query", path[0]);
    }
    scope.addBreadcrumb({
      category: extensions?.code,
      message,
      level: sentry.Severity.Debug,
    });

    sentry.captureException(new Error(error.message));
  });
};

export default sentryLauncher;
