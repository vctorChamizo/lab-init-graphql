import { gql } from 'apollo-server-express'

const authTypeDef = gql`
  extend type Query {
    signInMutation(username: String, email: String, password: String!): String!
  }

  extend type Mutation {
    signUpMutation(username: String!, email: String!, password: String!): User
  }
`

export default authTypeDef
