import { merge } from 'lodash'

import { taskResolver } from './task'
import { userResolver } from './user'
import { authResolver } from './auth'

const resolvers = merge(userResolver, authResolver, taskResolver)

export default resolvers
