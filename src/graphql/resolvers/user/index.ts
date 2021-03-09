import { IResolvers } from 'apollo-server-express'

import { findUsersQuery, findUserByIdQuery } from './user.query'

export const userResolver: IResolvers = {
  Query: { findUsersQuery, findUserByIdQuery }
}
