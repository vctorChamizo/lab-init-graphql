import { merge } from "lodash";

import { userResolver } from "./user";
import { authResolver } from "./auth";
import { taskResolver } from "./task";

const resolvers = merge(userResolver, authResolver, taskResolver);

console.log(resolvers);

export default resolvers;
