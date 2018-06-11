exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'eat breakfast'},
        {id: 2, task: 'brush teeth'},
        {id: 3, task: 'have a shower'}
      ])
    })
}
