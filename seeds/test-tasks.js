exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'eat breakfast', completed: 'Null', priority: 1},
        {id: 2, task: 'brush teeth', completed: 'Y', priority: 2},
        {id: 3, task: 'have a shower', completed: 'Y', priority: 3},
        {id: 4, task: 'get dressed', completed: 'Null', priority: 1}
      ])
    })
}
