
exports.up = function (knex, Promise) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('task')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('todos')
}
