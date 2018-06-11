
exports.up = (knex, Promise) => {
  return knex.schema.table('todos', (table) => {
    table.string('Completed')
  })
}

exports.down = function (knex, Promise) {

}
