import { merge } from 'lodash'

import { userResolver } from './user'
import { authResolver } from './auth'
import { taskResolver } from './task'

const resolvers = merge(userResolver, authResolver, taskResolver)

export default resolvers
