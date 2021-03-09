import { IUser } from '@interfaces'
import { findUserByIdService, findUsersService } from '../../../service'

export const findUsersQuery = async () => {
  try {
    const userCollection: IUser[] = await findUsersService()
    return userCollection
  } catch (error) {
    throw error
  }
}

export const findUserByIdQuery = async (_: any, args: any) => {
  try {
    const { id } = args
    const user: IUser | null = await findUserByIdService(id)
    return user
  } catch (error) {
    throw error
  }
}
