
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'learn knex.js'},
        {id: 2, task: 'create a migration'},
        {id: 3, task: 'seed the table'}
      ])
    })
}
