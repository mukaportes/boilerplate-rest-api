exports.up = function(knex) {
  return knex.schema.createSchema('boilerplate')
}

exports.down = function(knex) {
  return knex.schema.dropSchema('boilerplate')
}
