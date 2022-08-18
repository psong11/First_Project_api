const { Model } = require('objection')
const knex = require('../lib/knex')

Model.knex(knex)

class BaseModel extends Model {

}

module.exports = BaseModel
