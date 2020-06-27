exports.up = knex => {
  return Promise.all([
    knex.schema.withSchema('boilerplate').hasTable('user').then(function (exists) {
      if (!exists) {
        return knex.schema.withSchema('boilerplate').createTable('user', table => {
          table
            .uuid('user_uid')
            .notNullable()

          table
            .string('country')
            .notNullable()

          table
            .integer('company')
            .notNullable()

          table
            .timestamp('created_at')
            .notNullable()

          table
            .primary(['user_uid'])
        })
      }
    })
  ])
}

exports.down = knex => knex.schema.withSchema('boilerplate').dropTableIfExists('user')
