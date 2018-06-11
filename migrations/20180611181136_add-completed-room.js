
exports.up = function (knex, Promise) {
  return knex.schema.table('todos', table => {
    table.string('completed')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('todos', table => {
    table.dropColumn('completed')
  })
}
