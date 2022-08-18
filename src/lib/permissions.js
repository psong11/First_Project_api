const { ForbiddenError, AuthenticationError } = require('apollo-server-express')
const {
  rule, shield, allow,
} = require('graphql-shield')
// Here is the ruleset used by graphql-shield to protect access to resolvers
// Define rules here:

// eslint-disable-next-line no-unused-vars
const isAuthenticated = rule({ cache: 'contextual' })(
  (parent, args, { user }) => (user ? true : new AuthenticationError('Invalid token, please log in.')),
)

// And then apply them to the shield
module.exports = shield({
  Query: {
    '*': allow,
  },
  Mutation: {
    login: allow,
    register: allow,
    '*': allow,
  },
}, {
  fallbackError: new ForbiddenError('Forbidden'),
  allowExternalErrors: true,
})
