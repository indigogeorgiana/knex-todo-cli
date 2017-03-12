exports.up = function (knex) {
  return knex.schema.createTable('todos', function (t) {
    t.increments('id').primary()
    t.string('task')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('todos') 
}
