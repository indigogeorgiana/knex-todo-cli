exports.up = function (knex) {
  return knex.schema.table('todos', function (t) {
    t.boolean('completed')
  })
}

exports.down = function (knex) {
  return knex.schema.table('todos', function (t) {
    t.dropColumn('completed')
  })
}
