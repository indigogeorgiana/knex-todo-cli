exports.seed = function (knex) {
  return knex('todos').truncate()
    .then(function () {
      return knex('todos').insert([
        { id: 1, task: 'Acquire wombats.' },
        { id: 2, task: '???' },
        { id: 3, task: 'Profit.' }
      ])
      .then(() => {
        return knex.raw('ALTER SEQUENCE todos_id_seq RESTART WITH 4')
      })
    })
}
