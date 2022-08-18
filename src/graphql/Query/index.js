const { merge } = require('lodash')
const User = require('./User')

const resolvers = [User]

module.exports = merge(...resolvers)
