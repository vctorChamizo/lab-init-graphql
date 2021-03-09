import { GraphQLError } from 'graphql'

import sentryLauncher from '../lib/sentry'
import { CustomError } from './custom'

import { CustomCodeError, ApolloCodeError } from '@enums'

const handleError = (error: GraphQLError): GraphQLError => {
  console.log(error)
  if (error.message.startsWith('Database Error: ')) {
    return new CustomError(error.message, CustomCodeError.DATABASE_ERROR)
  } else if (error.message.startsWith('Context')) {
    return new CustomError(error.message, CustomCodeError.CONTEXT_ERROR)
  }

  if (error.extensions?.code == ApolloCodeError.INTERNAL_SERVER_ERROR) {
    sentryLauncher(error)
  }

  return error
}

export default handleError
