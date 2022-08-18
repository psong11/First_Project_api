const { gql } = require('apollo-server-express')

module.exports = gql`

# These scalars are resolved in /lib/scalars.js and can be used as input or output type in schema.
scalar DateTime
scalar Date
scalar Time
scalar EmailAddress
scalar PhoneNumber

type Query {
    user(id: ID!): User!
  }

  type Mutation {
    login(email: EmailAddress!, password: String!): Viewer!
    register(input: RegisterInput!): Viewer!
  }

  interface UserTraits {
    id: ID!
    email: EmailAddress!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type User implements UserTraits {
    id: ID!
    email: EmailAddress!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Viewer implements UserTraits {
    id: ID!
    email: EmailAddress!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: EmailAddress!
    password: String!
  }
`
