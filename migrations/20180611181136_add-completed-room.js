
exports.up = function (knex, Promise) {
  return knex.schema.table('todos', table => {
    table.boolean('completed', true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('todos', table => {
    table.dropColumn('completed')
  })
}
