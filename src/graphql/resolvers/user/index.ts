import { IResolvers } from 'apollo-server-express'

import { findUsersQuery, findUserByIdQuery } from './user.query'

const id = (user: IUser): string => {
  return String(user.id)
}

export const userResolver: IResolvers = {
  Query: { findUsersQuery, findUserByIdQuery }
  User: { id }
}
