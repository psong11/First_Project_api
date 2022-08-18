const { createComplexityLimitRule } = require('graphql-validation-complexity')
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express')
const { applyMiddleware } = require('graphql-middleware')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
const context = require('../lib/context')
const formatError = require('../lib/formatError')
const permissions = require('../lib/permissions')

const baseSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
const schema = applyMiddleware(
  baseSchema,
  permissions,
)

const initializeGraphqlRouter = app => {
  const server = new ApolloServer({
    schema,
    context,
    formatError,
    introspection: process.env.NODE_ENV === 'development',
    playground: process.env.NODE_ENV === 'development',
    tracing: process.env.NODE_ENV === 'production',
    cacheControl: true,
    engine: false,
    validationRules: [createComplexityLimitRule(1000)],
  })

  // Use custom cors config for security and authorization!
  server.applyMiddleware({ app, path: '/graphql', cors: false })
  return server
}


module.exports = initializeGraphqlRouter
