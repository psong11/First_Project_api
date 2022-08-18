const User = require('../../models/User')

const user = async (obj, { id }) => {
  const u = await User.query().findById(id)

  return u
}

// Suppose that user is a subresolver to a table/object. The following code shows how
// the userLoader from the context can be used to load the users all at once where id is
// the attribute from the parent table.

// const user = async ({ id }, _, { loaders }) => {
//   const { userLoader } = loaders
//   return userLoader.load(id)
// }

const resolver = {
  UserTraits: {
    __resolveType: () => null,
  },
  Query: { user },
}

module.exports = resolver
