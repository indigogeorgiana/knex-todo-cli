exports.up = (knex, Promise) => {
  return knex.schema.createTable('todos', table => {
    table.increments('id')
    table.string('task')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('todos')
}
