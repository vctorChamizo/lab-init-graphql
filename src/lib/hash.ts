import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '@constants'

export const encryptPassword = (password: string): string => {
  return bcrypt.hashSync(password, SALT_ROUNDS)
}

export const comparePassword = (
  inputPassword: string,
  hashedPassword: string
): boolean => {
  return bcrypt.compareSync(inputPassword, hashedPassword)
}
