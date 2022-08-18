const { GraphQLDateTime, GraphQLDate, GraphQLTime } = require('graphql-iso-date')
const { PhoneNumberResolver, EmailAddressResolver } = require('graphql-scalars')

const resolver = {
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  Time: GraphQLTime,
  PhoneNumber: PhoneNumberResolver,
  EmailAddress: EmailAddressResolver,
}
module.exports = resolver
