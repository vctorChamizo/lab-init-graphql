import { IUserAuth, IUser } from '@interfaces'
import { UserModel } from '../db/models'

export const signUpIntegration = async (user: IUserAuth): Promise<IUser> => {
  try {
    return new UserModel(user).save()
  } catch (error) {
    throw error
  }
}

export const signInIntegration = async (
  email: string,
  username: string
): Promise<IUser | null> => {
  try {
    return UserModel.findOne({ $or: [{ email }, { username }] })
  } catch (error) {
    throw error
  }
}
