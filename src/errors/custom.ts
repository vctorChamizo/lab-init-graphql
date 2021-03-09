import { ApolloError } from 'apollo-server-errors'

export class CustomError extends ApolloError {
  constructor(message: string, code: string) {
    super(message, code)
    Object.defineProperty(this, 'name', { value: 'MyError' })
  }
}
