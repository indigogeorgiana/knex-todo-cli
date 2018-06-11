
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'work hard'},
        {id: 2, task: 'play harder'},
        {id: 3, task: 'sleep all hours'}
      ])
    })
}
