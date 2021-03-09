import jwt from 'jsonwebtoken'

import { JWT_SECRET } from '@constants'

export const generateJWT = async (id: string): Promise<string> => {
  return await jwt.sign({ id }, JWT_SECRET)
}

export const validateJWT = async (token: string): Promise<string | any> => {
  return await jwt.verify(token, JWT_SECRET)
}
