
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Nerble'},
        {id: 2, task: 'Iflamagam'},
        {id: 3, task: 'Torubis'}
      ])
    })
}
