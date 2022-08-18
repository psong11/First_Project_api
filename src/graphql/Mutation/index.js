const { merge } = require('lodash')
const Auth = require('./Auth')

const resolvers = [Auth]

module.exports = merge(...resolvers)
