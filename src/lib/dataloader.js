const DataLoader = require('dataloader')
const User = require('../models/User')

// Given a list of user ids, return an array of objects where each object at an
// index in the array is associated to the the userId at the same index in the ids argument.

// If a subresolver returns an array instead of a single object, the batch function must return
// an array of arrays where where each array is a list of object. To make that change to the
// batch function, simply replace find in the .then call to filter.

const batchUsers = async ids => {
  const users = await User.query()
    .whereIn('id', ids).select()
    .then(rows => ids.map(buyerId => rows.find(x => x.buyerId === buyerId)))

  return users
}

const generateLoaders = () => ({
  userLoader: new DataLoader(batchUsers),

})

module.exports = { generateLoaders }
