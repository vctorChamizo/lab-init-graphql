import { signUpService } from '../../../service'

import { IUser } from '@interfaces'

export const signUpMutation = async (
  _: undefined,
  {
    username,
    email,
    password
  }: { username: string; email: string; password: string }
): Promise<IUser> => {
  return await signUpService(username, email, password)
}
