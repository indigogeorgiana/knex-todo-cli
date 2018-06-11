
exports.up = (knex, Promise) => {
  return knex.schema.createTable('todos', table => {
    table.increments('id')
    table.string('task')
    table.string('completed')
    table.string('priority')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('todos')
}
