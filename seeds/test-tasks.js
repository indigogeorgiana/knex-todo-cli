
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'learn to code'},
        {id: 2, task: 'unlearn to code'},
        {id: 3, task: 'go about my life'}
      ])
    })
}
