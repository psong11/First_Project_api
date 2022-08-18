const { isSameHour } = require('date-fns')
const { createToken, decodeToken } = require('./auth')
const User = require('../models/User')
const { generateLoaders } = require('./dataloader')

// The method exported here sets the context for all resolvers and refreshes tokens
module.exports = async ({ req, res }) => {
  const context = { req, res, loaders: generateLoaders() }

  // Collect JWT, escape 'Bearer' prefix
  const jwt = req.headers.authorization ? req.headers.authorization.slice(7) : null

  if (!jwt) {
    // No JWT present for auth
    return context
  }

  try {
    const {
      sub, iat,
    } = decodeToken(jwt)

    const user = await User.query().findById(sub)
    context.user = user
    if (isSameHour(iat, new Date().getTime() / 1000)) {
      return context
    }

    // If token is more than an hour old, refresh it
    const payload = {
      sub: user.id,
    }
    res.set('x-token', createToken(payload))

    return context
    // If failed context creation, make unathenticated request
  } catch (error) {
    return context
  }
}
