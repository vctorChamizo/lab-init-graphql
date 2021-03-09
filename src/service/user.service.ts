import { IUser } from '@interfaces'
import { findUsersIntegration, findUserByIdIntegration } from '../integration'

export const findUsersService = async (): Promise<IUser[]> => {
  try {
    return findUsersIntegration()
  } catch (error) {
    throw error
  }
}

export const findUserByIdService = async (
  id: string
): Promise<IUser | null> => {
  try {
    return findUserByIdIntegration(id)
  } catch (error) {
    throw error
  }
}
