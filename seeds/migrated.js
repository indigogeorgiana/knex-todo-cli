
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Nerble', completed: false},
        {id: 2, task: 'Iflamagam', completed: false},
        {id: 3, task: 'Torubis', completed: false}
      ])
    })
}
