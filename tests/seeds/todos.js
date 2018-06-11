exports.seed = function (knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        {id: 1, task: 'eat breakfast'},
        {id: 2, task: 'brush teeth'},
        {id: 3, task: 'have a shower'}
      ])
    })
}
