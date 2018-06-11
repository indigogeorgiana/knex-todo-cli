
exports.up = function (knex, Promise) {
  return knex.schema.table('todos', table => {
    table.boolean('completed')
    table.dateTime('date')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('todos', table => {
    table.dropColumns('completed', 'date')
  })
}
